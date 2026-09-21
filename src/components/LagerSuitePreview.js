import { useEffect, useRef, useState } from "react";

const MODULES = [
  {
    id: "inv",
    short: "INV",
    name: "Lagerverwaltung",
    color: "#3B82F6",
    items: [
      ["📦", "Artikelverwaltung"],
      ["🗂️", "Artikelkategorien"],
      ["🏭", "Lieferanten"],
      ["👥", "Kunden"],
      ["🧭", "Standorte"],
      ["📍", "Lagerplätze"],
      ["🔖", "Chargen / Seriennummern"],
      ["⚠️", "Mindestbestand"],
      ["🏷️", "Etikettenvorlagen"],
      ["📊", "Lagerübersicht"],
      ["🧮", "Bestandskorrektur"],
      ["🗓️", "Inventurplanung"],
    ],
  },
  {
    id: "mov",
    short: "MOV",
    name: "Warenbewegungen",
    color: "#0EA5A0",
    items: [
      ["📥", "Wareneingang"],
      ["📤", "Warenausgang"],
      ["🔁", "Umlagerung"],
      ["🧺", "Kommissionierung"],
      ["🎁", "Verpackung"],
      ["🚚", "Versandetiketten"],
      ["↩️", "Retoure – Eingang"],
      ["↪️", "Retoure – Ausgang"],
      ["🧾", "Inventurbuchung"],
      ["🏭", "Produktionsentnahme"],
      ["✅", "Produktion – Rückmeldung"],
    ],
  },
  {
    id: "rep",
    short: "REP",
    name: "Berichte",
    color: "#8B5CF6",
    items: [
      ["🖼️", "Bestands-Snapshot"],
      ["📈", "Bewegungsübersicht"],
      ["🐢", "Langsamdreher / Altbestände"],
      ["🚨", "Fehlbestände"],
      ["🧵", "Chargenrückverfolgung"],
      ["⚖️", "Inventurdifferenzen"],
    ],
  },
  {
    id: "qms",
    short: "QMS",
    name: "Qualitätsmanagement",
    color: "#F43F5E",
    items: [
      ["🔍", "Wareneingangsprüfung"],
      ["🧪", "Stichprobenplan"],
      ["🚫", "Fehler- / Sperrbestand"],
      ["📑", "Qualitätsberichte"],
    ],
  },
  {
    id: "set",
    short: "SET",
    name: "Systemeinstellungen",
    color: "#F59E0B",
    items: [
      ["⚙️", "Systemkonfiguration"],
      ["👤", "Benutzerverwaltung"],
      ["🔐", "Rollen & Berechtigungen"],
      ["🗒️", "Audit-Log"],
      ["⬆️", "Import / Export"],
      ["🖨️", "Druck & Barcodes"],
      ["🪪", "Lizenzverwaltung"],
      ["🗄️", "Backup & Wiederherstellung"],
      ["🩺", "Systemstatus"],
    ],
  },
];

const AUTO = ["inv", "mov", "qms", "rep", "set"];

export const LagerSuitePreview = ({ expanded = false }) => {
  const interacted = useRef(false);
  const [open, setOpen] = useState(["inv", "mov", "qms", "rep"]);

  useEffect(() => {
    const id = setInterval(() => {
      if (interacted.current) return;
      setOpen((curr) => {
        if (curr.length >= AUTO.length) return ["inv"];
        const next = AUTO.find((key) => !curr.includes(key));
        return next ? [...curr, next] : curr;
      });
    }, 1600);
    return () => clearInterval(id);
  }, []);

  const toggle = (id) => {
    interacted.current = true;
    setOpen((curr) => (curr.includes(id) ? curr.filter((m) => m !== id) : [...curr, id]));
  };

  const remove = (id) => {
    interacted.current = true;
    setOpen((curr) => curr.filter((m) => m !== id));
  };

  return (
    <div className={`ls-preview${expanded ? " is-expanded" : ""}`}>
      <div className="ls-chrome">
        <b>LagerSuite</b>
        <div className="ls-winbtns">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="ls-toolbar">
        {MODULES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`ls-pill${open.includes(m.id) ? " on" : ""}`}
            style={{ "--mod": m.color }}
            onClick={() => toggle(m.id)}
          >
            {m.short}
          </button>
        ))}
      </div>
      <div className="ls-canvas">
        <span className="ls-apps-label">Apps</span>
        <em className="ls-haupt">Hauptfenster</em>
        {MODULES.filter((m) => open.includes(m.id)).map((m) => (
          <article
            key={m.id}
            className={`ls-float ls-${m.id}`}
            style={{ "--mod": m.color }}
          >
            <header>
              <div>
                <b>{m.short}</b>
                <small>{m.name}</small>
              </div>
              <button
                type="button"
                className="ls-del"
                aria-label={`Close ${m.short}`}
                onClick={() => remove(m.id)}
              >
                ×
              </button>
            </header>
            <ul>
              {m.items.map(([icon, label]) => (
                <li key={label}>
                  <i>{icon}</i>
                  <span>{label}</span>
                  <em>›</em>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
