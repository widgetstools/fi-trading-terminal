import { useTheme } from '@/context/ThemeContext';

export function DesignSystemPicker() {
  const { ds, setDs, designSystems } = useTheme();

  return (
    <select
      value={ds}
      onChange={(e) => setDs(e.target.value)}
      className="font-mono-fi"
      style={{
        background: 'var(--bn-bg2)',
        color: 'var(--bn-t0)',
        border: '1px solid var(--bn-border)',
        borderRadius: 'var(--radius, 4px)',
        fontSize: 11,
        padding: '4px 8px',
        cursor: 'pointer',
        outline: 'none',
      }}
      title="Design system"
    >
      {designSystems.map((d) => (
        <option key={d.id} value={d.id}>
          {d.label}
        </option>
      ))}
    </select>
  );
}
