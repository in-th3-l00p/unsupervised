import Container from "../components/container";

export default function Projects() {
    return (
        <section id="projects" className="w-screen h-screen gap-16 text-foreground flex justify-center items-center">
            <Container>
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-8">projects</h1>
                    <p>the thangs that are making <span className="font-semibold">unsupervised</span> go the way it does</p>
                </div>

                <div className="grid grid-cols-3 mt-32">
                    <div className="flex flex-col gap-4 border-r-1 border-foreground px-8">
                        <h2 className="text-lg font-bold">courses</h2>
                        <p className="mb-auto">learned <span className="font-semibold">unsupervised</span> with these resources</p>
                        <a href="/courses" className="justify-self-end text-sm font-semibold hover:text-foreground/60 hover:underline transition-all">
                            explore
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 border-r-1 border-foreground px-8">
                        <h2 className="text-lg font-bold">events</h2>
                        <p className="mb-auto">learn, build, party, build together</p>
                        <a href="/courses" className="justify-self-end text-sm font-semibold hover:text-foreground/60 hover:underline transition-all">
                            discover
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 px-8">
                        <h2 className="text-lg font-bold">products</h2>
                        <p className="mb-auto">thangs built & published with the <span className="font-semibold">unsupervised</span> label</p>
                        <a href="/courses" className="justify-self-end text-sm font-semibold hover:text-foreground/60 hover:underline transition-all">
                            browse
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}