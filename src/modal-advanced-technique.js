import React, { Fragment } from 'react'
import t from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@material-ui/core'
import CloseButton from './close-button'

const ModalAdvancedTechnique = ({ technique, closeModal }) => {
  const tech = technique.replace(/\dx$/, '').trim()

  return (
    <Dialog
      open
      onClose={closeModal}
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
    >
      <DialogTitle>
        {tech}
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </DialogTitle>
      <DialogContent>{getTechniqueText(tech)}</DialogContent>
    </Dialog>
  )
}

ModalAdvancedTechnique.propTypes = {
  technique: t.string.isRequired,
  closeModal: t.func.isRequired
}

const A = ({ href, children }) => (
  <a href={href} rel='noopener noreferrer' target='_blank'>{children || href}</a>
)

A.propTypes = {
  href: t.string.isRequired,
  children: t.node
}

function getTechniqueText (technique) {
  const techniques = {
    'Bi-Set': () => (
      <Fragment>
        <P>
          Consiste em fazer dois exercícios do mesmo grupo muscular sem
          descanso entre. Após a execução dos dois se faz um descanso conforme na
          tabela de treino.
        </P>
        <P>
          Exemplo: Rosca direta + Rosca alternada 4x12 – Bi-Set
        </P>
        <P>
          Executa-se a rosca direta falhando perto de 12 repetições e sem nenhum
          tipo de descanso se executa a rosca alternada falhando perto de 12
          repetições. Se da o intervalo conforme tabela e se repete o processo até
          completar as séries programadas pra cada exercício.
        </P>
        <P>
          Se for muito ruim fazer os 2 exercícios em sequência por qualquer motivo,
          pode fazer separado, mas isso vai gerar mais tempo dentro da academia.
        </P>
        <P>
          Vídeo: <A href='https://youtu.be/KGZhG9LGWsU' />
        </P>
      </Fragment>
    ),

    'Drop-Set': () => (
      <Fragment>
        <P>
          Apenas executado na última série. Ao falhar se abaixa o peso em cerca de
          20 a 30% e se leva até a falha novamente, não importando quantas
          repetições forem necessárias pra isso acontecer. Se for "Drop-Set 3x" se
          executa três reduções de carga seguidas e levando até a falha pra cada
          redução sem nenhum tipo de descanso.
        </P>
        <P>
          Exemplo: Rosca direta 4x12 – Drop-Set 3x
        </P>
        <P>
          Executam-se todas as séries normalmente, o drop-set será aplicado
          apenas na última série. No final da quarta série se abaixa 20% do peso e
          executa até a falha. Abaixa mais 20% de peso e novamente leva-se até a
          falha. Abaixa mais 20% e novamente até a falha. Sem nenhum tipo de
          intervalo entre essas séries.
        </P>
        <P>
          Vídeo: <A href='https://youtu.be/r4rxW8sqpNo' />
        </P>
      </Fragment>
    ),

    'Rest \'n\' Pause': () => (
      <Fragment>
        <P>
          Aplicado apenas na última série. Ao se falhar na última série se da um
          descanso de 5 a 15 segundos e se executa novamente, com o mesmo peso,
          até a falha. Caso esteja 3x na tabela se executa essa estratégia 3x seguidas
          apenas na última série. Esse descanso de 5 a 15 segundos depende do
          tanto que o exercício exige. Se a sua respiração ficar muito forte e rápido e
          o coração batendo forte, se espera 15 segundos (geralmente acontece em
          exercícios de membros inferiores e dorsais). Caso tenha menos alteração
          (geralmente em exercícios de músculos pequenos – bíceps, tríceps, etc.),
          espera-se 5 segundos.
        </P>
        <P>
          Exemplo: Rosca direta 4x12 – Rest ‘n’ Pause 3x.
        </P>
        <P>
          Executam-se quatro séries normais. Ao falhar na quarta série se descansa
          de 5 a 15 segundos (pode largar os pesos) e tenta fazer mais repetições
          sem abaixar a carga. Atingindo a falha novamente se descansa mais 5 a 15
          segundos e repete o processo. Repete-se essa sequência mais uma vez,
          totalizando 3x.
        </P>
        <P>
          Vídeo: <A href='https://youtu.be/30PA_tBg-_8' />
        </P>
      </Fragment>
    ),

    'FST-7': () => (
      <Fragment>
        <P>
          Se executa 7 séries com as repetições estipuladas na tabela com intervalo
          de 30 segundos entre as séries. Durante esse intervalo é feito um
          alongamento dos músculos que estão sendo trabalhados. Essa técnica
          serve para aumentar massivamente o fluxo sanguíneo muscular
          localizado e com isso aumentar a fáscia muscular para o músculo ter
          espaço para hipertrofiar além de ser um treino de altíssima intensidade. A
          carga utilizada é sempre a máxima, mas pode ser abaixada pra ficar
          dentro das repetições alvos, afinal o cansaço será bem alto.
        </P>
        <P>
          Vídeo: <A href='https://youtu.be/D4bBRKeJUjU' />
        </P>
        <P>
          Os alongamentos podem ser feitos 15s de cada lado. Clique no músculo
          pra ver o alongamento: {' '}
          <A href='/images/fst7/alongamento-peitoral.jpg'>Peitoral</A>,
          <A href='/images/fst7/alongamento-dorsal-peitoral.jpg'>Dorsal</A>, {' '}
          <A href='/images/fst7/alongamento-deltoide-posterior1.jpg'>Deltoides</A>, {' '}
          <A href='/images/fst7/alongamento-pesco%C3%A7o-e-trap%C3%A9zio.jpg'>Trapézio</A>, {' '}
          <A href='/images/fst7/f7a7baf162738f9159e3837836f8842e.jpg'>Tríceps</A>, {' '}
          <A href='/images/fst7/Alongamento-b%C3%ADceps1.jpg'>Bíceps</A>, {' '}
          <A href='/images/fst7/IOT-Exercicios-0116.jpg'>Antebraço</A>, {' '}
          <A href='/images/fst7/iii.jpg'>Quadríceps</A>, {' '}
          <A href='/images/fst7/alongar-lombar.jpg'>Posterior de Coxa</A>, {' '}
          <A href='/images/fst7/Alongamento-gl%C3%BAteos.jpg'>Glúteos</A>, {' '}
          <A href='/images/fst7/DSC_0123.JPG'>Adutores</A>, {' '}
          <A href='/images/fst7/Alongamento-gastrocnemio.jpg'>Panturrilhas</A>.
        </P>
      </Fragment>
    ),

    'GVT': () => (
      <P>
        O GVT é uma técnica de séries massivas para desenvolvimento muscular.
        Executa-se 10 séries de um determinado exercício com descanso de 60 a
        90 segundos (sempre tentando ficar em 60s). A carga utilizada é sempre a
        máxima, mas pode ser abaixada pra ficar dentro das repetições alvos,
        afinal o cansaço será bem alto.

        Vídeo: <A href='https://youtu.be/yb1Kz9rW3_s' />
      </P>
    )
  }

  return techniques[technique] ? techniques[technique]() : null
}

const P = (props) => <Typography paragraph {...props} />

export default ModalAdvancedTechnique
