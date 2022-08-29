---
layout: page
title: Team
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/amm834.png',
    name: 'Aung Myat Moe',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/amm834' },
      { icon: 'twitter', link: 'https://twitter.com/_amm834' }
    ]
  },
  {
    avatar: 'https://www.github.com/paiakarit.png',
    name: 'Thet Paing Hein',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/paiakarit' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Small Team
    </template>
    <template #lead>
      The development of Wuttyi language is guided by the
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
