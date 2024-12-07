export default function Map() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gpp-[50px] ml-[100px]">
        <div>
          <h2 className="mb-[50px] text-[50px] font-bold text-purple-900">
            Find my Location
          </h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.887428760112!2d-0.06839575117125!3d51.51424861404128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034add2a4013%3A0x260eae2ed0510822!2sWhitechapel%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1733550203745!5m2!1sen!2sbd"
          className="w-[600px]
        h-[500px] border-[5px] border-purple-900 p-2 rounded-md"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
