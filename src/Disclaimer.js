import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card'

const Disclaimer = () => (
  <Card style={{marginTop: '2rem'}}
  >
    <CardHeader
      title='Disclaimer'
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <div>
        <p>Este é um projeto em construção. Os valores calculados são apenas
        uma referência e não refletem valores reais.</p>
        <p>Para valores mais precisos, consulte a legislação vigente ou
        um contador.</p>
        <h5>O cálculo de CLT considera:</h5>
        <ul>
          <li>Descontos de INSS e IRRF</li>
          <li>11 salários normais, 1 salário com adicional de 1/3 de férias
          e 13º salário</li>
          <li>O resultado são valores líquidos recebidos. Para tomar decisões
            é importante considerar benefícios e outros descontos</li>
        </ul>
        <h5>O cálculo de PJ considera:</h5>
        <ul>
          <li>Pessoa jurídica do tipo MEI</li>
          <li>12 recebimentos ao ano</li>
          <li>Desconto mensal da DAS</li>
          <li>Esta forma de contratação não é estritamente legal mas é uma
          prática de mercado.</li>
        </ul>
        <h5>Features sendo desenvolvidas:</h5>
        <ul>
          <li>Adicionar outros benefícios e descontos à CLT, como FGTS, VT, VR
          </li>
          <li>Adicionar à PJ custos de alimentação e transporte</li>
          <li>Adicionar opções de PJ LTDA com suas formas de tributação</li>
          <li>Exibir os cálculos, para mostrar como é difícil chegar nesses
            números</li>
        </ul>
      </div>
    </CardText>
  </Card>
);

export default Disclaimer
