import { Button, Container, Grid, Title, Image, Text, Group } from '@mantine/core';

export function SingleBlogHero() {
  return (
    <div style={{
        backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
    }}>
        <Container py={100} mt={"-115px"} fluid ml={90} mr={69}>
            <Grid mt={57} align='center'>
                <Image radius={'13px'} height='auto' width='100%' src='images/pages/blog-detail/heroSingleBlog.png' alt='heroSingleBlog' />
                <Title mt={36} className='uppercase font-[900] text-[48px] leading-[56px] tracking-[-0.015em]'>
                    NEW CASINO TRENDS 2023
                </Title>
                <Grid.Col>
                    <div className='flex flex-none items-baseline mt-[-10px]'>
                        <Text color='#B3B3B3' mt={36} className='font-[400] text-[16px] leading-[19px] tracking-[-0.015em]'>
                            Published By <span style={{color: '#FFB800'}}>John Smith</span>
                        </Text>
                        <div style={{background: '#D9D9D9', width: '9px', height: '9px', marginLeft: '21px', marginRight: '21px'}}></div>
                        <Text color='#B3B3B3' mt={36} className='font-[400] text-[16px] leading-[19px] tracking-[-0.015em]'>
                            Published on <span style={{color: '#FFB800'}}>22 Aug,2022</span>
                        </Text>
                    </div>
                </Grid.Col>
                <Grid.Col mt={60}>
                    <Text className='font-[400] text-[20px] leading-[38px] tracking-[0.005em]' opacity={0.8}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis nibh non augue malesuada iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor velit eget arcu convallis pulvinar. Aenean scelerisque eros non luctus pretium. Sed sollicitudin elit sit amet nunc tempus aliquet id eu quam. Proin ligula felis, iaculis vitae mauris in, porta placerat elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Text>
                </Grid.Col>
                <Grid.Col mt={40}>
                    <Text className='font-[700] text-[20px] leading-[38px] tracking-[0.005em]' opacity={0.8}>
                        consectetur adipiscing elit. Sed venenatis nibh non augue malesuada iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor velit eget arcu convallis pulvinar. Aenean scelerisque eros non luctus pretium. Sed sollicitudin elit sit amet nunc tempus aliquet id eu quam. Proin ligula felis, iaculis vitae mauris in, porta placerat elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Text>
                </Grid.Col>
                <Grid.Col mt={72}>
                    <Group position='center'>
                        <Image radius={'13px'} height='auto' width='auto' src='images/pages/blog-detail/NewCasino1.png' alt='NewCasino1' />
                        <Image radius={'13px'} height='auto' width='auto' src='images/pages/blog-detail/NewCasino2.png' alt='NewCasino2' />
                    </Group>
                </Grid.Col>
                <Grid.Col mt={70}>
                    <Text className='font-[400] text-[20px] leading-[38px] tracking-[0.005em]' opacity={0.8}>
                        Sed euismod lacus eu rutrum viverra.<span className='font-[700]'> Mauris tincidunt accumsan venenatis. Quisque ultrices facilisis eros et iaculis.</span> Donec pretium lacus et placerat dictum. Ut at consectetur mauris. Pellentesque mattis lacus at fringilla mattis. Sed egestas eleifend quam, malesuada luctus sapien varius eu. Vivamus in quam in dui eleifend dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    </div>
  );
}
