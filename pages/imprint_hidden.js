import React from "react";

const Imprint = () => (
  <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
    <div className="w-full max-w-2xl p-6 m-4 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-semibold mb-8">Imprint</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Address:</h2>
        <p>Erich Lehmann</p>
        <p>Sandstr. 25</p>
        <p>80335</p>
        <p>Germany</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact:</h2>
        <p>Email: erich(at)meetanyway.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Responsible for content according to § 55 Abs. 2 RStV:
        </h2>
        <p>Erich Lehmann</p>
        <p>Sandstr. 25</p>
        <p>80335</p>
        <p>Germany</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liability for Contents</h2>
        <p>
          As service providers, we are liable for own contents of these websites according
          to § 7, paragraph 1 German Telemedia Act (TMG). However, according to §§ 8 to 10
          German Telemedia Act (TMG), service providers are not obligated to permanently
          monitor submitted or stored information or to search for evidences that indicate
          illegal activities.
        </p>
        <p>
          Legal obligations to removing information or to blocking the use of information
          remain unchallenged. In this case, liability is only possible at the time of
          knowledge about a specific violation of law. Illegal contents will be removed
          immediately at the time we get knowledge of them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Copyright</h2>
        <p>
          Contents and compilations published on these websites by the providers are
          subject to German copyright laws. Reproduction, editing, distribution as well as
          the use of any kind outside the scope of the copyright law require a written
          permission of the author or originator. Downloads and copies of these websites
          are permitted for private use only. The commercial use of our contents without
          permission of the originator is prohibited.
        </p>
        <p>
          Copyright laws of third parties are respected as long as the contents on these
          websites do not originate from the provider. Contributions of third parties on
          this site are indicated as such. However, if you notice any violations of
          copyright law, please inform us. Such contents will be removed immediately.
        </p>
      </section>
    </div>
  </div>
);

export default Imprint;
