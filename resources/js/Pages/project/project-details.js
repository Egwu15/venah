import seaparsBanner from "../../../images/Seapars-banner.png";
import seapars from "../../../images/seapers.png"
import nomadBanner from "../../../images/NomadPay-banner.png";
import nmsBanner from "../../../images/NMS-banner.png";
import xRideBanner from "../../../images/x-Ride-banner.png";
import seaparsMobile1 from "../../../images/mobiles/seapers-mobile1.png";
import seaparsMobile2 from "../../../images/mobiles/seapers-mobile2.png";
import seaparsMobile3 from "../../../images/mobiles/seapers-mobile3.png";
import nomadMobile1 from "../../../images/mobiles/nomad-mobile1.png";
import nomadMobile2 from "../../../images/mobiles/nomad-mobile2.png";
import nomadMobile3 from "../../../images/mobiles/nomad-mobile3.png";
import xRide1 from "../../../images/mobiles/xRide-mobile1.png";
import xRide2 from "../../../images/mobiles/xRide-mobile2.png";
import xRide3 from "../../../images/mobiles/xRide-mobile3.png";
import xRide4 from "../../../images/mobiles/xRide-mobile4.png";
import xRide5 from "../../../images/mobiles/xRide-mobile5.png";
import xRide6 from "../../../images/mobiles/xRide-mobile6.png";
import normad_pay from "../../../images/nomad_pay.png";
import xRide from "../../../images/xRide.png";
import nms from "../../../images/nms.png";

const seaparsContent = {
    header: "Helping small businesses manage their resources efficiently.",
    headImage: seaparsBanner,
    headerContent:
        "Seapars provides SMEs with a comprehensive solution to manage finances, inventory, customer relationships, and projects. We developed a responsive, intuitive dashboard to give business owners full control over their operations in real-time by tracking their finances, managing inventory, and overseeing projects in one place.",
    mobile: [seaparsMobile1, seaparsMobile2, seaparsMobile3],
    otherWorks: [normad_pay, xRide, nms],
};

const normadContent = {
    header: "A secure, fast, and reliable platform connecting Nigerians to the world.",
    headImage: nomadBanner,
    headerContent:
        "We worked with NomadPay to develop a secure and intuitive platform that allows users to send and receive money from anywhere in the world. We implemented robust security features, including multi-factor authentication and encryption, to protect user data. Additionally, we optimised the platform to offer competitive exchange rates and lower transfer fees.",
    mobile: [nomadMobile1, nomadMobile2, nomadMobile3],
    otherWorks: [seapars, xRide, nms],
};

const xRideContent = {
    header: "Transforming urban transportation with seamless ride hailing.",
    headImage: xRideBanner,
    headerContent:
        "We collaborated closely with the XRide team to understand their vision and the core needs of their users. Our approach focused on developing a user-friendly interface for both riders and drivers while ensuring that the backend infrastructure could scale with increasing demand. We integrated real-time tracking, optimized driver-passenger matching algorithms, and created a secure payment system.",
    mobile: [xRide1, xRide2, xRide3, xRide4, xRide5, xRide6],
    otherWorks: [seapars, normad_pay, nms],
};

const nmsContent = {
    header: "A centralized platform for real-time notifications, feedback collection, and service ratings.",
    headImage: nmsBanner,
    mobile: [],
    headerContent:
        "Our solution focused on building a notification platform that prioritized speed, reliability, and flexibility, with added features to support surveys and service ratings. We created a user-friendly dashboard that allows companies to send real-time notifications, manage feedback surveys, and monitor customer ratings in one centralized system. The feedback and rating modules were designed to be intuitive, encouraging higher participation and allowing companies to gather meaningful insights into customer satisfaction.",
    otherWorks: [normad_pay, xRide, nms],
};

const projectEntries = [
    ["Seapers", seaparsContent],
    ["NomadPay", normadContent],
    ["Xride", xRideContent],
    ["NMS", nmsContent],
];

export const projectContent = (value) => {
    const foundEntry = projectEntries.find(([name]) => name === value);
    return foundEntry ? foundEntry[1] : seaparsContent;
};
