import React, { useEffect, useState } from "react";
import { getthemes} from "../api/xeroApi";

type Themes = {
  brandingThemeID: string;
  name: string;
  type: string;
  sortOrder: string;
};

type ThemesSelectorProps = {
  onSelect: (Themes: Themes) => void;
};

const ThemesSelector: React.FC<ThemesSelectorProps> = ({ onSelect }) => {
  const [Themess, setThemess] = useState<Themes[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedThemesId, setSelectedThemesId] = useState<string>("");

  useEffect(() => {
    const fetchThemess = async () => {
      try {
        const response = await getthemes();
        if (!response.ok) throw new Error("Failed to fetch Themess");
        const data: Themes[] = await response.json();
        setThemess(data);
        if (data.length > 0) {
          setSelectedThemesId(data[0].brandingThemeID);
          onSelect(data[0]);
        }
      } catch (err) {
        console.error("Error fetching Themess:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchThemess();
  }, [onSelect]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Themes = Themess.find(t => t.brandingThemeID === event.target.value);
    if (Themes) {
      setSelectedThemesId(Themes.brandingThemeID);
      onSelect(Themes);
    }
  };

  if (loading) return <p>Loading Themess...</p>;

  return (
    <div className="p-4">
      <label className="block text-gray-700 mb-2">Select Xero Themes:</label>
      <select
        className="border p-2 rounded-md w-full"
        value={selectedThemesId}
        onChange={handleChange}
      >
        {Themess.map(Themes => (
          <option key={Themes.brandingThemeID} value={Themes.brandingThemeID}>
            {Themes.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemesSelector;
