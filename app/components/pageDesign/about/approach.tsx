import { Container, Title, Image } from "@mantine/core";

export function Approach () {
    return <div>
        <Container size={1300} py={100}>
            <Title order={2}>OUR APPROACH</Title>
            <Image mt={100} src="/images/pages/about/explaination.png" alt="explaination" />
        </Container>
    </div>
}