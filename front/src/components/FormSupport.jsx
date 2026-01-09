export default function FormContact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-beige font-texte">
      <div className="w-full max-w-md border border-vertSauvage p-6 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-titre text-grainCafe mb-6 text-center">
          Contactez-nous
        </h1>

        <form className="flex flex-col gap-4">

          {["Email", "Sujet"].map((label) => (
            <div key={label}>
              <label className="block mb-1 text-grainCafe">{label}</label>
              <input
                type="text"
                className="w-full border border-oliveGrise px-3 py-2 rounded focus:border-vertSauvage focus:ring-vertSauvage"
                placeholder={label}
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 text-grainCafe">Message</label>
            <textarea
              className="w-full border border-oliveGrise px-3 py-2 rounded h-32 resize-none focus:border-vertSauvage focus:ring-vertSauvage"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full py-2 rounded bg-mandarine text-grainCafe font-bouton hover:bg-vertSauvage transition"
          >
            Envoyer
          </button>
        </form>

        <p className="text-center mt-4 text-oliveGrise">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    </div>
  );
}
