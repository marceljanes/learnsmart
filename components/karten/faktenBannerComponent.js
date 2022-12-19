
  export default function FaktenBanner({daten}) {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-xl font-bold tracking-tigh">{daten.length} Fakten über den Zweiten Weltkrieg</h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {daten.map((faq, id) => (
                <div key={id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-basE">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }