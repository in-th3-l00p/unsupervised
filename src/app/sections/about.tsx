import clsx from "clsx";
import Container from "../components/container";

function Image ({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        <div 
            className={clsx(
                "bg-white rounded-lg shadow-xl shadow-black/40", 
                "w-50 h-60 pt-6 px-2 pb-16", 
                className
            )}
        >
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover"
            />
        </div>
    )
}

function Images() {
    return (
        <div className="flex min-w-fit gap-4 justify-self-start">
            <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" 
                alt="img" 
                className="rotate-4"
            />
            <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" 
                alt="img" 
                className="-translate-x-20 -rotate-1"
            />
            <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" 
                alt="img" 
                className="-translate-x-46 rotate-2"
            />
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about"
            className="w-screen h-screen gap-16 text-foreground flex justify-center items-center"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-6xl font-bold mb-8">about</h1>
                        <div className="space-y-4">
                            <p>
                                based in Brasov, Romania, <span className="font-semibold">unsupervised</span> is a trademark for
                                distributing projects that are focusing on offering value to the community.
                            </p>
                            <p className="mt-4">
                                projects released under thie name will tend towards encouraging others to pursue their dreams.
                            </p>
                            <p className="mt-4">
                                funded by{" "}
                                <a
                                    href="https://tiscacatalin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold hover:underline"
                                >intheloop</a>. enjoy
                            </p>
                        </div>
                    </div>
                    <Images />
                </div>
            </Container>
        </section>
    );
}