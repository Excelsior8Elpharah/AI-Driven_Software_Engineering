
import React from 'react';

export const DEFAULT_OFFERS = [
  {
    id: 'VIVO_FIBRA_ESSENCIAL',
    name: 'Vivo Fibra Wi-Fi Essencial',
    description: 'Plano básico para navegação e streaming standard.',
    speed: '300 Mega',
    price: 'R$ 100,00',
    keyBenefits: ['Wi-Fi 6 incluso', 'Instalação grátis', 'App Vivo Play']
  },
  {
    id: 'VIVO_FIBRA_GAMER',
    name: 'Vivo Fibra Gamer Pro',
    description: 'Foco em baixa latência e ultra velocidade.',
    speed: '700 Mega',
    price: 'R$ 150,00',
    keyBenefits: ['Prioridade de tráfego', 'Upload simétrico', 'Gamer Hero']
  }
];

export const DEFAULT_ARGUMENTS = [
  {
    offerId: 'VIVO_FIBRA_ESSENCIAL',
    argumentId: 'ARG_01',
    text: 'Explicar a tecnologia da fibra ótica pura',
    type: 'benefit' as const
  },
  {
    offerId: 'VIVO_FIBRA_ESSENCIAL',
    argumentId: 'ARG_02',
    text: 'Mencionar a estabilidade do Wi-Fi 6',
    type: 'benefit' as const
  }
];
