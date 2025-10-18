// components/PCRTestPage.jsx
import Link from "next/link";
import Scrollimg from "./Scroll-img";

function SalonAtHomePage() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4">
                {/* Breadcrumb / Link */}
                <div>
                    <Link href="/">
                        <span className="flex gap-3 text-sm text-gray-400 tracking-wide cursor-pointer">
                            <span className="underline">HOME</span>
                            <span>/ PCR Test at Home</span>
                        </span>
                    </Link>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/women-salon-at-home.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            PCR Test at Home
                        </h1>
                        <p className="text-base md:text-lg mb-8">Book Your Test Now</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link href="/pcr-at-home/booking">
                                <span className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 transition-all duration-300 cursor-pointer">
                                    Book Now
                                </span>
                            </Link>
                            <Link href="/pcr-at-home/booking">
                                <span className="md:hidden inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 w-full text-center transition-all duration-300 cursor-pointer">
                                    Book Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Intro / Description */}
                <div className="mt-8 text-gray-800 cust-font">
                    <div className="leading-relaxed text-[#4A4A4A]">
                        <p className="mb-6 text-md">
                            Expert professionals offer you multiple salon services at your home. Manicures, pedicures, massages, and more—there are many service options under Justlife's Salon at Home. At Justlife, we care about your comfort and value your time.
                        </p>
                        <p className="mb-6 text-md">
                            A home service salon is a convenient and luxurious way to enjoy beauty and wellness treatments without leaving your house. Whether it's a quick manicure or a relaxing massage, our at-home salon services bring the expertise of a women salon at home directly to your doorstep. Justlife provides a comprehensive range of home services salon options, ensuring you receive the best beauty service at home.
                        </p>
                        <p className="mb-10 text-md ">
                            Our salon-at-home offerings include everything from online salon services to parlor services at home, making it easy to book and enjoy high-quality treatments. So, let's examine what services you can benefit from, their inclusions, and their advantages.
                        </p>

                        <h3 className="text-2xl font-bold mb-5 text-[#4A4A4A]">
                            What is a Salon at Home?
                        </h3>

                        <p className="mb-8 text-md">
                            Salon at Home is a convenient and luxurious way to enjoy beauty and wellness treatments without leaving your house. Whether it's a quick manicure or a relaxing massage, our home beauty services bring the expertise of a salon directly to your doorstep. So, let's examine what services you can benefit from, their inclusions, and their advantages. </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">Beauty Services at Home</h3>
                        <p className="mt-4">
                            A: A swab sample is taken from the nose & throat. Your sample is then submitted to a certified lab for examination. Your test results can be shared as early as 5 hours, depending on the chosen service and location.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">1. Manicure & Pedicure at Home</h3>
                        <p className="mt-4">
                            Our skilled professionals are always ready to deliver hygienic home salon services with great care and high-quality tools and equipment.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">1.1. Jelly Spa Manicure & Pedicure at Home</h3>
                        <p className="mt-4 text-md">
                            Experience a luxurious jelly spa manicure and pedicure that caters to the specific needs of your skin and nails. Justlife uses top-quality products that prevent nail breakage, strengthen them against cold, and ensure healthy growth. The luxurious jelly bath hydrates and moisturizes your skin, leaving your hands and feet soft and supple. This service includes cuticle care, nail shaping, and a relaxing hand and foot massage, providing a complete pampering experience.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">1.2. Classic Manicure & Pedicure</h3>
                        <p className="mt-4">
                            Enjoy a thorough 90-minute classic manicure and pedicure session. This service includes nail trimming, shaping, cuticle care, exfoliation, and a soothing massage. We finish with the application of your chosen nail polish. This traditional treatment ensures your nails are clean, well-groomed, and polished to perfection, offering a classic home salon service experience.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">1.3. Gel Polish Manicure & Pedicure</h3>
                        <p className="mt-4">
                            Opt for a long-lasting and chip-resistant gel polish manicure and pedicure. This 130-minute service includes nail prep, cuticle care, and the application of gel polish, which is cured under a UV lamp for durability. Gel polish keeps your nails strong and promotes faster, healthier growth. Enjoy beautiful, glossy nails that last for weeks without chipping.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">1.4. French Manicure & Pedicure</h3>
                        <p className="mt-4">
                            The French manicure and pedicure are timeless and elegant. This service includes nail shaping, cuticle care, and the application of a nude or pink base color with white tips. It takes 50 minutes for a French manicure and 60 minutes for a French pedicure. This classic look is perfect for any occasion and reflects the aesthetic sophistication of French beauty culture.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2. Acrylic Extension & Nail Polish Application at Home</h3>
                        <p className="mt-4">
                            Enhance your nails with our acrylic extension and nail polish services, providing durable and stylish options for your hands and feet.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.1. Nail Cut / File</h3>
                        <p className="mt-4">
                            This quick 15-minute service includes expertly cutting and filing your nails to the desired shape. Our professionals ensure your nails look perfect and ready for further treatments.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.2. Nail Acrylic Extensions Removal (Hands or Feet)</h3>
                        <p className="mt-4">
                            Remove acrylic extensions or hard gel nails professionally without damaging your natural nails. This 60-minute service uses disposable sheets and gentle techniques to ensure a safe and hygienic removal process.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.3. Nail Acrylic Extensions Removal Combo</h3>
                        <p className="mt-4">
                            In just 120 minutes, our experts will remove acrylic extensions from both your hands and feet. This comprehensive package ensures your nails are left healthy and ready for new treatments.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.4. Nail Gel Polish Removal (Hands or Feet)</h3>
                        <p className="mt-4">
                            Our 20-minute gel polish removal service gently removes old gel polish from your fingernails or toenails without causing any damage. This service ensures your nails are clean and ready for a fresh application.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.5. Classic Nail Polish Application (Hands or Feet)</h3>
                        <p className="mt-4">
                            Choose from a wide variety of nail polish colors and types to suit your style and mood. This service includes nail clipping, filing, and the application of OPI or Essie products. You can also request additional nail art during booking.
                        </p>


                        <h3 className="text-2xl font-bold mb-2 mt-4">2.6. French-Polish Application (Hands or Feet)</h3>
                        <p className="mt-4">
                            Enjoy a French polish application for a classic and sophisticated look. This service includes the application of a nude or pink base color with white tips, providing a timeless and elegant finish.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.7. Gel Nail Polish Application (Hands or Feet)</h3>
                        <p className="mt-4">
                            Get long-lasting and durable nails with our gel polish application service. Using CND Shellac Gel Polish, this treatment ensures your nails are hard, shiny, and smudge-free immediately after application.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">2.8. Gel French Polish Application (Hands or Feet)</h3>
                        <p className="mt-4">
                            Combine the durability of gel polish with the elegance of a French manicure. This service uses CND Shellac Gel Polish to create a stylish and long-lasting French look.
                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">3. Massage at Home</h3>
                        <p className="mt-4">
                            Relax in the comfort of your home with our professional massage services. Our home service makes you feel like you're in a massage parlor or on vacation in Thailand. Let’s explore our special massage packages.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">3.1. Head Massage</h3>
                        <p className="mt-4">
                            Alleviate stress and reduce headaches with our 20-minute head massage. Our experts offer both dry and oil massages, using disposable towels to ensure hygiene. This relaxing treatment targets pressure points on your scalp, neck, and shoulders, providing relief from tension and promoting overall relaxation.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">3.2. Foot Massage</h3>
                        <p className="mt-4">
                            Stimulate your muscles and improve blood circulation with our 20-minute foot massage. This treatment reduces tension, and promotes relaxation throughout your body. Our experts offer both dry and oil foot massages, tailored to your preferences.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">4. Waxing at Home
                        </h3>
                        <p className="mt-4">
                            Enjoy smooth skin with our waxing services at home. We work with the most professional experts in the business, offering two types of waxing: honey and Rica. Choose from single-area waxing or full-body waxing packages, all at affordable prices.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">4.1. Single Area Waxing
                        </h3>
                        <p className="mt-4">
                            Target specific areas such as arms, legs, underarms, or the bikini line with our single-area waxing services. Our experts use high-quality wax to ensure a smooth and painless experience.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">4.2. Full Body Waxing
                        </h3>
                        <p className="mt-4">
                            Opt for a comprehensive full-body waxing package that includes waxing for all desired areas. This service ensures your skin is smooth and hair-free, providing long-lasting results.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">5. Hair Services at Home
                        </h3>
                        <p className="mt-4">
                            Our salon home service extends to professional hair treatments. We have separate packages for short and long hair, including Blow Dry, Blow Dry with curls, hair straightening with Iron, and L’Oréal Hair Spa. This 45-minute hair treatment strengthens your hair follicles and heals damage, providing a salon-like experience at home.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">5.1. Blow Dry (Short Hair)
                        </h3>
                        <p className="mt-4">
                            Achieve a sleek and polished look with our blow dry service for short hair. Our professionals will style your hair to perfection, giving you a fresh and vibrant appearance.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">5.2. Blow Dry (Long Hair)</h3>
                        <p className="mt-4">
                            Enjoy a smooth and voluminous finish with our blow dry service for long hair. Our experts will style your hair to enhance its natural beauty and shine.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">5.3. Blow Dry with Curls
                        </h3>
                        <p className="mt-4">
                            Add beautiful curls to your blow dry for a glamorous look. This service includes styling with curls to give your hair extra bounce and texture.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">5.4. Hair Straightening with Iron
                        </h3>
                        <p className="mt-4">
                            Get perfectly straight hair with our hair straightening service using a flat iron. This treatment smooths out frizz and leaves your hair looking sleek and shiny.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">6. Facial Care & Treatment at Home
                        </h3>
                        <p className="mt-4">
                            Facial care is as crucial as hair care. Our experts offer treatments that cleanse, nourish, and enrich your skin with vitamins, smooth your skin, and tighten pores. We provide various facial treatments tailored to your needs at very affordable prices.

                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4">6.1. Deep Cleansing Facial
                        </h3>
                        <p className="mt-4">
                            Our deep cleansing facial removes impurities and unclogs pores, leaving your skin refreshed and revitalized. This treatment includes exfoliation, steam, extraction, and a nourishing mask.


                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">6.2. Hydrating Facial

                        </h3>
                        <p className="mt-4">
                            Replenish and hydrate your skin with our hydrating facial. This treatment uses moisturizing products and techniques to restore your skin's natural moisture balance, leaving it soft and glowing.


                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">6.3. Anti-Aging Facial

                        </h3>
                        <p className="mt-4">
                            Combat signs of aging with our anti-aging facial treatment. This service includes the use of specialized products and techniques to reduce fine lines, wrinkles, and age spots, promoting a youthful and radiant complexion.


                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">7. Threading at Home

                        </h3>
                        <p className="mt-4">
                            Our experts provide threading services with great care and high hygiene standards. Get threading services for your entire face, with 15 minutes for eyebrows, 10 minutes for the upper lip, and 25 minutes for the entire face.
                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">7.1. Eyebrow Threading
                        </h3>
                        <p className="mt-4">
                            Achieve perfectly shaped eyebrows with our 15-minute eyebrow threading service. Our experts use precise techniques to create clean and defined brows.
                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4">7.2. Upper Lip Threading
                        </h3>
                        <p className="mt-6 mb-[25px]">
                            Remove unwanted hair from your upper lip with our quick 10-minute threading service. This treatment ensures smooth and hair-free skin.                         </p>




                        <div>
                            <h1 className="text-3xl font-bold mt-8">Why Should You Book a Beauty Salon Service at Home?</h1>

                            <p className="mt-8 mb-8">Booking a beauty salon service at home offers unparalleled convenience and flexibility. Here are some compelling reasons to choose Justlife's salon at-home services:</p>

                            <p>1. Convenience and Flexibility:</p>
                            <ul className="list-disc ms-4 ps-3 marker:text-[1.6rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                <li>
                                    Enjoy salon services at home whenever it suits you. There's no need to spend time traveling to a salon or waiting for your appointment. With Justlife, you can schedule your home beauty services at your preferred time, ensuring you never disrupt your daily routine.
                                </li>
                            </ul>

                        </div>

                    </div>








                    {/* FAQs */}

                    <h3 className="text-2xl font-bold mb-6"></h3>

                    <div className="text-[18px] font-normal not-italic leading-[1.33] text-[#4A4A4A] space-y-5">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Beauty Services at Home</h3>
                            <p>
                                A: A swab sample is taken from the nose & throat. Your sample is then submitted to a certified lab for examination. Your test results can be shared as early as 5 hours, depending on the chosen service and location.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Is a Covid-19 test painful?</h3>
                            <p>
                                A: Covid-19 tests can be uncomfortable but are not painful. Swab tests are done thoroughly yet gently using a cotton swab to penetrate the nose or throat; this can lead to slight discomfort & a gagging or coughing sensation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">What is a Covid-19 PCR test?</h3>
                            <p>
                                A: A Covid-19 PCR test is used to detect the presence of infection with SARS-CoV2 (the coronavirus that causes COVID-19 disease). This very sensitive test looks for the RNA of the virus using a technique called RT-PCR. The test can detect as little as one virus particle in swabs taken from inside the mouth or nose & is recognized as the most reliable test for Covid-19.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Can I have a Covid-19 test at home?</h3>
                            <p>
                                A: Yes, we can visit your home, hotel, or office to conduct a Covid-19 swab test. Our qualified nurses will come to your location, fully equipped with protective gear, to take your test swab at your convenient time. Your sample is then submitted to a certified lab for examination. Your test results will be shared with you within 5, 7, 12, or 24 hours depending upon the chosen service and location.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Which test is better: A Covid-19 antibody test or a Covid-19 PCR test?</h3>
                            <p>
                                A: A Covid-19 PCR test will detect whether you currently have Covid-19. A Covid-19 antibody test will see whether you have had Covid-19 in the past & have recovered from it by checking the Covid-19 antibody level in your body.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">What should I do if I test positive for Covid-19?</h3>
                            <p>
                                A: If you test positive for Covid-19, you must self-isolate for 14 days. You may wish to consult with a doctor from the comfort of your home.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Do I need to take a Covid-19 test before flying out of Dubai?</h3>
                            <p>
                                A: Please check the regulations of your arrival destination before travel since the travel requirement varies from country to country.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Will there be a delay in reports?</h3>
                            <p>
                                A: If the client is presumptive positive or the viral load is inconclusive in the first run, the lab must rerun the sample, which may delay the delivery of the reports. Justlife will not be accountable for any reimbursement in such situations. Reruns may require an additional 2 to 24 hours to complete. This procedure must be followed to ensure that the reports are accurate. The lab cannot provide false positive, false negative, or presumptive positive reports; instead, they must rerun the sample.
                            </p>
                        </div>
                    </div>



                    {/* Terms & Conditions */}
                    <div className="mt-10 text-[18px] font-normal not-italic leading-[1.33] text-[#4A4A4A]">
                        <h3 className="text-2xl font-bold mb-6">Terms and Conditions:</h3>

                        <p className="mb-4">
                            Justlife is a third party that provides a platform where the customer and the service provider can be linked together. Justlife shall not be responsible or liable for any loss or damage (direct, indirect, special, consequential, or incidental) of any sort whatsoever incurred as the result of any transaction.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2">
                            Travel Destination Requirements:
                        </h1>
                        <p className="mb-5">
                            Justlife will not be liable for any compensation owing to the service user's misinformation regarding travel destination needs. Kindly check the entry requirements of the destination you are traveling to on the onward carrier's website before booking an appointment.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2">
                            Compensations / Liability :
                        </h1>
                        <p className="mb-5">
                            Justlife's maximum total liability is limited to the total amount of service fees paid by the Service User.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2">
                            Refund Policy Limitations:
                        </h1>
                        <p className="mb-3">
                            The Justlife Refund Policy does not cover the following conditions:
                        </p>

                        <ul className="list-disc pl-6 leading-tight">
                            <li>Refunds, discounts, or price modifications cannot be applied post receiving the PCR test.</li>
                            <li>Prices are non-negotiable and subject to change by the company's management.</li>
                            <li>
                                If the PCR results are not received within the agreed-upon time frame due to unforeseen circumstances, we will work with you and the Service Provider to examine the situation and resolve it to the best of our ability, or we will provide a partial refund. Circumstances include but are not limited to:
                            </li>
                            <li>
                                Justlife does not cover unforeseen circumstances related to delays in Hasana or Al Hosn application status. Disclaimer: If the Al-Hosn is not up to date, the user can contact Al Hosn by phone at 800 HOSN (4676) or email at mailto:info@alhosnapp.ae
                            </li>
                            <li>
                                Justlife will only be obliged to return the agreed amount to a UAE account in case of a refund; Justlife will not be able to refund the compensation to an international account.
                            </li>
                            <li>
                                For a potential flight loss/missed, Justlife will not be liable for the expenses endured.
                            </li>
                            <li>
                                All refund requests or queries related to the booking must be made within 48 hours of the booking.
                            </li>
                        </ul>

                    </div>
                    {/* cancelation policy */}
                    <div className="mt-10 text-[18px] font-normal not-italic leading-[1.33] text-[#4A4A4A]">
                        <h3 className="text-2xl font-bold mb-6">Cancellation Policy:</h3>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li>The Service User can cancel the appointment for free within 10 minutes of making it and/or up to 12 hours before the scheduled start time.</li>
                            <li>The Service User acknowledges that the following cancellation reasons are not attributable to Justlife. Such as but not limited to: <br />
                                1.Providing incorrect information, i.e., incorrect name, phone number, and\or address. <br />
                                2.Being unresponsive, not reachable, or unavailable to fulfill the services offered to you.
                            </li>
                            <p>Such cases will be treated as No Show, and late cancellation charges, as outlined below, will be applied.</p>
                            <li>
                                12+ hours before the appointment - Free of charge
                            </li>
                            <li>
                                12 to 2 hours before the appointment - 25% of the appointment value.
                            </li>
                            <li>
                                Less than 2 hours before the appointment - 50% of the appointment value.
                            </li>
                            <li>
                                On-the-spot cancellation - 100% of the appointment value.

                            </li>
                        </ul>
                    </div>

                    {/* Reshedule policy */}

                    {/* cancelation policy */}
                    <div className="mt-10 text-[18px] font-normal not-italic leading-[1.33] text-[#4A4A4A]">
                        <h3 className="text-2xl font-bold mb-6">Reschedule Policy:</h3>
                        <p className="mt-5">In the case of any last-minute booking modifications, the Reschedule Policy is meant to safeguard both the Service User and the Service Provider. We understand that plans sometimes change. Therefore, we've created a rescheduling option for Service Users and Service Providers.</p>
                        <ul className="list-disc pl-6  mt-4 ">

                            <p className="mx-[-25px]">The rescheduling fee applies as our nurse's schedule is pre-arranged. Kindly see the below table for your reference</p>
                            <li className="mt-8">
                                12+ hours before the appointment - Free of charge
                            </li>
                            <li>
                                12 to 2 hours before the appointment - 25% of the appointment value.
                            </li>
                            <li>
                                Less than 2 hours before the appointment - 50% of the appointment value.
                            </li>
                            <li>
                                On-the-spot cancellation - 100% of the appointment value.

                            </li>
                        </ul>
                        <p className="mt-8 ">For more information about other services we provide, kindly visit:
                            <Link href="" className="text-blue-500"> Lab Test at Home </Link> and <Link href="" className="text-blue-500">IV Therapy at Home </Link>.</p>
                    </div>
                </div>
            </div>
            <Scrollimg />
        </>
    );
}

export default SalonAtHomePage;
