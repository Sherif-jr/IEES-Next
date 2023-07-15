import ContactCard from "@/components/Contact/ContactCard";

export default async function contact() {
  const countries = await getCountries();
  return (
    <main className="w-full max-w-[1320px] md:py-24 md:px-12 pt-12 pb-8 px-8 m-auto">
      <ContactCard countries={countries} />
    </main>
  );
}

export const getCountries = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,idd,cioc"
    );
    const data = await res.json();
    const excluded = ["Afghanistan", "Israel"];
    const countries = data.map((country) => {
      if (!excluded.includes(country.name.common) && country.idd.root !== "") {
        return {
          letterGroup: country.name.common.substring(0, 1).toUpperCase(),
          name: country.name.common,
          short: country.cioc,
          flag: country.flags.png,
          code: `${country.idd.root}${country.idd.suffixes[0]}`,
        };
      }
    });
    const sortedCountries = countries.sort(
      (a, b) => Number(a.code.substring(1)) - Number(b.code.substring(1))
    );

    return sortedCountries;
  } catch (err) {
    console.warn(`Error occured in countries api: ${err}`);
    return [
      {
        name: "Egypt",
        short: "EGY",
        flag: "https://flagcdn.com/eg.svg",
        code: "+20",
      },
    ];
  }
};
