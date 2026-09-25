import HeadLine from './Components/headLine';
import AllProjects from './Components/AllProjects';

export default function Projects() {
    return (
        <section className="min-h-screen w-full bg-[#131313] flex flex-col items-start justify-start px-6 md:px-12 py-8 font-mono">
            <HeadLine />
            <AllProjects />
        </section>
    );
}