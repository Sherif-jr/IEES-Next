import ContactCard from "@/components/Contact/ContactCard";
import { getContactDetails } from "@/libs/firebase";

export const metadata = {
  title: "Contact Us - IEES",
  description:
    "We provide you the best in market engineering services. No more headaches or delays. Our services are tailored for your needs. Pay only for what you need and expand even more at any time.",
};

export default async function contact() {
  const [countries, contactDetails] = await Promise.all([
    getCountries(),
    getContactDetails(),
  ]);
  return (
    <main className="w-full max-w-[1320px] md:py-24 md:px-12 pt-12 pb-8 px-8 m-auto">
      <ContactCard countries={countries} contactDetails={contactDetails} />
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
