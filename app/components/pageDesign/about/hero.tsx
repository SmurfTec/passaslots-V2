import { BackgroundImage, Group, Text, Title, Image, createStyles, Grid} from '@mantine/core';
import { ScrollButton } from '@pasa/customComponents';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
    backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div 
    className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className={classes.backdrop} style={{ marginTop: '-115px' }}>
        <div className="pt-[163px] pb-[50px]">
          <div className="text-center">
            <Group position='center'>
              <Title className="font-[700] text-[#FFB800]" order={3}>
                About Us
              </Title>
            </Group>
            <Image className='mx-auto' src="/images/pages/about/homeImage.png" width={551} height={523} alt="vector" />
            <Text color="black" className="font-[400] uppercase text-[#FFFFFF]" mt={0} size={24}>
              25+ full-time professionals, 1 goal:
            </Text>
            <Grid justify='center' align='center'>
              <Title color="white" size={36} mt={20} className="font-[500] justify-center text-center" order={3} maw={1000}>
                To create the world's most entertaining and user-friendly online game room platform.
              </Title>
            </Grid>
            <Grid justify='center' align='center'>
              <Title style={{
                borderRadius: '50px',
                border: '7px solid #016BE6',
              }} p={10} px={50} mb={50} size={31} color="#FFFFFF" mt={31} className="font-[400]" order={4} maw={541}>
                How are we going to get there?
              </Title>
            </Grid>
          </div>
        </div>
          {/* <ScrollButton pointerPosition='DOWN' className='bottom-20 left-1/2 absolute' /> */}
      </div>
    </div>
  );
}
