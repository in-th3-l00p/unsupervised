import Container from "../components/container";

export default function About() {
    return (
        <section 
            id="about" 
            className="w-screen h-screen gap-16 text-foreground"
        >
            <Container>
                <h1 className="text-6xl font-bold mb-8">about</h1>
                <p>
                    we are a group of people who are interested in hacking and technology.
                </p>
            </Container>
        </section>
    );
}