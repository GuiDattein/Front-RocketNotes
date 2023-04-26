import { Container, Links, Content } from "./styles.js";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'; 
import { Tag } from '../../components/Tag';
import styled from "styled-components";

export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae dolorem adipisci excepturi modi quod voluptatem? Architecto dolorum sit aperiam perferendis nemo perspiciatis est nam cumque recusandae. Tempora, quaerat necessitatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae dolorem adipisci excepturi modi quod voluptatem? Architecto dolorum sit aperiam perferendis nemo perspiciatis est nam cumque recusandae. Tempora, quaerat necessitatibus!
          </p>

          <Section title="Links ùteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}