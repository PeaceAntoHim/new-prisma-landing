import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/items/Footer";
import Hero from "../components/headers/Hero";
import ProfileSeciton from "../components/sections/ProfileSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export default function Home() {
    return (
        <>
            <Hero />
            <ProfileSeciton />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}

// export async function getServerSideProps() {

//     const messages = await prisma.message.findMany()

//     return {
//         props: {
//             data: messages
//         }
//     }
// }