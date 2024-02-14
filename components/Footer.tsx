import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <div className=" border-t-2 flex-col justify-center m-4">
        <div className="">
          <p className="text-center m-4">
            Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are
            continuously working to improve the accessibility of our web experience for everyone, and we welcome
            feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please{" "}
            <Link
              href="https://zillow.zendesk.com/hc/en-us/requests/new?ticket_form_id=39140"
              className=" text-blue-600"
            >
              let us know
            </Link>
            .
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center mx-auto m-4">
            Zillow, Inc. holds real estate brokerage <Link href="/z/info/real-estate-licenses/">licenses</Link> in
            multiple states. Zillow (Canada), Inc. holds real estate brokerage{" "}
            <Link href="/z/info/real-estate-licenses/" className=" text-blue-600">
              licenses
            </Link>{" "}
            in multiple provinces.
            <br />
            <Link
              href="https://s.zillowstatic.com/pfs/static/SOP_NYS_10-4-23.pdf"
              rel="nofollow"
              className=" text-blue-600"
            >
              § 442-H New York Standard Operating Procedures
            </Link>
            <br />
            <Link
              href="https://s.zillowstatic.com/pfs/static/fairhousingnotice_10-4-23.pdf"
              rel="nofollow"
              className=" text-blue-600"
            >
              § New York Fair Housing Notice
            </Link>
            <br />
            TREC:{" "}
            <Link
              href="https://s.zillowstatic.com/pfs/static/TREC_ZINC_10-4-23.pdf"
              rel="nofollow"
              className=" text-blue-600"
            >
              Information about brokerage services
            </Link>
            ,{" "}
            <Link
              href="https://www.trec.texas.gov/forms/consumer-protection-notice"
              rel="nofollow"
              className=" text-blue-600"
            >
              Consumer protection notice
            </Link>
            <br />
            California DRE #1522444
            <br />
            <Link href="https://www.zillow.com/z/info/contact-us/" className=" text-blue-600">
              Contact Zillow, Inc. Brokerage
            </Link>
          </p>
        </div>
        <div>
          <p className="text-center m-4">
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The
            Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The
            trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the
            quality of services provided by real estate professionals who are members of CREA. Used under license.
          </p>
        </div>
      </div>
      <div className="flex my-8 justify-center gap-4 items-center">
        <Link href="https://www.zillow.com/z/buying/app-download/">
          <Image src="./app-store-badge.svg" height={100} width={200} alt="app store badge"></Image>
        </Link>
        <Link href="https://www.zillow.com/z/buying/app-download/">
          <Image src="./google-play-badge.svg" height={100} width={200} alt="app store badge"></Image>
        </Link>
      </div>
      <Image
        src="./footer-art.svg"
        layout="responsive"
        width={1200}
        height={160}
        alt="footer art"
        className="mt-20 mb-2"
      />
    </>
  );
};

export default Footer;
