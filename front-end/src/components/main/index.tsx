import { _Main, Wrap, List, Item, Title, Text } from "./styles";

export const Main = () => {
  return (
    <>
      <_Main animate={{ opacity: [0, 0.7, 1] }}>
        <Wrap>
          <List>
            <Item>
              <Title>Ease of access</Title>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                nihil vero facere distinctio maxime mollitia, totam, tempore,
                laudantium ducimus consequatur culpa id eaque reiciendis
                recusandae suscipit dolorum.
              </Text>
            </Item>
            <Item>
              <Title>Plus Service</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ipsa voluptatibus natus itaque, cupiditate numquam
                adipisci animi magnam omnis, officia dolorum accusantium unde
                tempora repudiandae reiciendis.
              </Text>
            </Item>
            <Item>
              <Title>Free Books</Title>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                sequi eveniet earum doloribus facere at mollitia? Id, error
                fugiat soluta vero aut quasi sit unde, architecto eum nihil sint
                praesentium?
              </Text>
            </Item>
            <Item>
              <Title>For Community</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, laborum nemo rem, minima, adipisci maiores ullam eius
                dolorem omnis quod assumenda ex suscipit temporibus laboriosam
                aliquam pariatur amet ab veritatis!
              </Text>
            </Item>
          </List>
        </Wrap>
      </_Main>
    </>
  );
};
