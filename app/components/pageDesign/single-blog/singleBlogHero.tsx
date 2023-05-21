import { Button, Container, Grid, Title, Image, Text, Group, Popover } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { Dots } from 'tabler-icons-react';
import { Blog, BlogComponentInterface } from '../../../../types';

export function SingleBlogHero({ blogData }: BlogComponentInterface) {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if (sideButtons) {
      setSideButtons(false);
    }
  };
  return (
    <div
      onClick={closesideMenu}
      style={{
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        marginTop: '-115px',
      }}
    >
      {!matches ? (
        <Group align={'center'} className="">
          {/* <Grid.Col> */}
          <Popover
            opened={sideButtons}
            onClose={close}
            position="right"
            styles={{
              dropdown: {
                background: 'transparent',
                border: '0px',
              },
            }}
          >
            <Popover.Target>
              <Button
                className="absolute top-1/4"
                onClick={() => setSideButtons(!sideButtons)}
                h={70}
                w={70}
                bg={
                  sideButtons
                    ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                    : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)'
                }
                styles={{
                  root: {
                    borderRadius: '0px 5px 5px 0px',
                    '&:hover': {
                      background: sideButtons
                        ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                        : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)',
                    },
                  },
                }}
              >
                <Dots size={34} />
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Group align="center">
                <Button
                  bg={'#0076FF'}
                  className="hover:bg-[#0076FF]"
                  radius={27}
                  mb={150}
                  ml={-20}
                  component={NextLink}
                  href="/about"
                  size="sm"
                >
                  About Us
                </Button>
                <Button
                  className="text-top items-center hover:bg-[#0076FF]"
                  bg={'#0076FF'}
                  mt={-20}
                  radius={35}
                  ml={-90}
                  component={NextLink}
                  href="/contact"
                  size="sm"
                >
                  Contact Us
                </Button>
                <Button
                  bg={'#0076FF'}
                  className="hover:bg-[#0076FF]"
                  radius={36}
                  mt={120}
                  ml={-135}
                  component={NextLink}
                  href="/how-it-works"
                  size="sm"
                >
                  How it works?
                </Button>
              </Group>
            </Popover.Dropdown>
          </Popover>
          {/* </Grid.Col> */}
        </Group>
      ) : undefined}
      <div className="py-[100px] ml-5 lg:ml-[90px] mr-5 lg:mr-[90px] pt-[150px]">
        <Image radius={'13px'} width={'100%'} height={'60%'} src={blogData.image} alt="heroSingleBlog" />
        <Title mt={50} className="uppercase font-[900] text-[48px] leading-[56px] tracking-[-0.015em]">
          {/* NEW CASINO TRENDS 2023 */}
          {blogData.title}
        </Title>

        <div className="flex flex-none items-baseline mt-[-10px]">
          <Text color="#B3B3B3" mt={36} className="font-[400] text-[16px] leading-[19px] tracking-[-0.015em]">
            Published By <span style={{ color: '#FFB800' }}>{blogData.author}</span>
          </Text>
          <div
            style={{ background: '#D9D9D9', width: '9px', height: '9px', marginLeft: '21px', marginRight: '21px' }}
          ></div>
          <Text color="#B3B3B3" mt={36} className="font-[400] text-[16px] leading-[19px] tracking-[-0.015em]">
            Published on <span style={{ color: '#FFB800' }}>{blogData.publishedOn}</span>
          </Text>
        </div>

        <Text className="font-[400] text-[20px] leading-[38px] tracking-[0.005em] mt-[100px]" opacity={0.8}>
          {blogData.description}
        </Text>

        <Text
          className="font-[700] text-[20px] leading-[38px] tracking-[0.005em] mt-[100px]"
          opacity={0.8}
          dangerouslySetInnerHTML={{ __html: blogData.richText }}
        ></Text>
      </div>
    </div>
  );
}
