export default function PriceList() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
            Våra priser
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Bokningar måste avbokas inom 48 timmar innan utsatt tid för att
            undvika avgift
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Klippning",
              sections: [
                {
                  label: "Dam",
                  items: [
                    {
                      name: "Klippning (utan tvätt)",
                      time: "45–60 min",
                      price: "490 kr",
                    },
                    {
                      name: "Tvätt, klipp & styling",
                      time: "60–90 min",
                      price: "595 kr",
                    },
                  ],
                },
                {
                  label: "Herr",
                  items: [
                    { name: "Klippning", time: "30 min", price: "470 kr" },
                    {
                      name: "Klippning m. delvis maskin",
                      time: "30 min",
                      price: "420 kr",
                    },
                  ],
                },
                {
                  label: "Barn",
                  items: [
                    {
                      name: "Barnklippning (0–14 år)",
                      time: "30–45 min",
                      price: "350 kr",
                    },
                  ],
                },
                {
                  label: "Övrigt",
                  items: [
                    {
                      name: "Snagging & maskinklipp",
                      time: "15–30 min",
                      price: "220 kr",
                    },
                    { name: "Lugg", time: "15–30 min", price: "120 kr" },
                  ],
                },
              ],
            },
            {
              title: "Hårfärgning",
              sections: [
                {
                  label: "Utväxt / Botten",
                  items: [
                    {
                      name: "Utväxt + klipp",
                      time: "120 min",
                      price: "fr. 1195 kr",
                    },
                    {
                      name: "Utväxt färg",
                      time: "90 min",
                      price: "fr. 1090 kr",
                    },
                  ],
                },
                {
                  label: "Kort hår",
                  items: [
                    { name: "Färg", time: "90 min", price: "fr. 1090 kr" },
                    {
                      name: "Färg + klipp",
                      time: "120–180 min",
                      price: "fr. 1390 kr",
                    },
                  ],
                },
                {
                  label: "Mellanlångt hår",
                  items: [
                    { name: "Färg", time: "105 min", price: "fr. 1290 kr" },
                    {
                      name: "Färg + klipp",
                      time: "120 min",
                      price: "fr. 1595 kr",
                    },
                  ],
                },
                {
                  label: "Långt / Extra långt",
                  items: [
                    { name: "Färg", time: "120 min", price: "fr. 1490 kr" },
                    {
                      name: "Färg + klipp",
                      time: "180 min",
                      price: "fr. 1790 kr",
                    },
                  ],
                },
              ],
            },
            {
              title: "Slingor & Balayage",
              sections: [
                {
                  label: "Balayage",
                  items: [
                    {
                      name: "Utan klipp",
                      time: "180 min",
                      price: "fr. 1895 kr",
                    },
                    {
                      name: "Inkl. klipp",
                      time: "240 min",
                      price: "fr. 2195 kr",
                    },
                  ],
                },
                {
                  label: "Folieslingor",
                  items: [
                    {
                      name: "Folieslingor + klipp",
                      time: "180 min",
                      price: "fr. 1695 kr",
                    },
                    {
                      name: "Utväxt + klipp",
                      time: "180 min",
                      price: "fr. 1895 kr",
                    },
                    {
                      name: "Utan klipp",
                      time: "150 min",
                      price: "fr. 1795 kr",
                    },
                  ],
                },
              ],
            },
            {
              title: "Övriga tjänster",
              sections: [
                {
                  label: "Tvätt & Styling",
                  items: [
                    { name: "Tvätt", time: "15–20 min", price: "250 kr" },
                    { name: "Kort styling", time: "30 min", price: "330 kr" },
                    { name: "Lång styling", time: "45 min", price: "375 kr" },
                  ],
                },
                {
                  label: "Behandlingar",
                  items: [
                    {
                      name: "Miracle Elixir inpackning",
                      time: "45–55 min",
                      price: "495 kr",
                    },
                  ],
                },
                {
                  label: "Fransar & Bryn",
                  items: [
                    {
                      name: "Färgning fransar",
                      time: "30 min",
                      price: "250 kr",
                    },
                    {
                      name: "Färgning fransar & bryn + plock",
                      time: "30 min",
                      price: "450 kr",
                    },
                  ],
                },
                {
                  label: "Övrigt",
                  items: [
                    { name: "Nyansering", time: "45 min", price: "varierande" },
                  ],
                },
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                {category.title}
              </h3>

              <ul className="space-y-5">
                {category.sections.map((section, i) => (
                  <li key={i}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {section.label}
                    </div>

                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <p className="font-medium text-sm text-gray-800">
                            {item.name}
                          </p>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{item.time}</span>
                            <span className="font-semibold">{item.price}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
