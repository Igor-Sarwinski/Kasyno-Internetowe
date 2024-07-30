<script setup>
import RuleItem from '@/components/RuleItem.vue'

const rules = [
  {
    id: 1,
    header: 'Kasyno nie jest prawdziwym kasynem',
    first: 'Niniejsze kasyno nie oferuje prawdziwych gier hazardowych.',
    second: 'Wszystkie gry są symulacjami przeznaczonymi wyłącznie do celów rozrywkowych.'
  },
  {
    id: 2,
    header: 'Projekt do celów edukacyjnych',
    first:
      'Celem projektu jest nauka i doskonalenie umiejętności związanych z programowaniem i tworzeniem aplikacji internetowych.',
    second: 'Żadne transakcje finansowe ani zakłady pieniężne nie są realizowane w tym kasynie.'
  },
  {
    id: 3,
    header: 'Brak prawdziwych nagród',
    first: 'Wszystkie punkty i nagrody w grze są wirtualne i nie mają wartości pieniężnej.',
    second: 'Gracze nie mogą wymieniać punktów na prawdziwe pieniądze ani nagrody.'
  },
  {
    id: 4,
    header: 'Użytkowanie na własną odpowiedzialność',
    first: 'Użytkownicy korzystają z kasyna na własne ryzyko.',
    second:
      'Twórcy projektu nie ponoszą odpowiedzialności za jakiekolwiek straty wynikające z korzystania z kasyna.'
  },
  {
    id: 5,
    header: 'Dane użytkowników',
    first: 'Żadne dane osobowe nie są gromadzone ani przetwarzane w celach komercyjnych.',
    second:
      'Wszelkie dane dotyczące użytkowników są używane wyłącznie do celów związanych z działaniem gry.'
  },
  {
    id: 6,
    header: 'Czas gry',
    first:
      'Użytkownicy powinni zachować umiar w korzystaniu z kasyna i nie spędzać nadmiernego czasu na grze.',
    second: 'Zalecane jest robienie regularnych przerw i dbanie o swoje zdrowie psychiczne.'
  },
  {
    id: 7,
    header: 'Zmiany regulaminu',
    first: 'Twórcy projektu zastrzegają sobie prawo do zmiany regulaminu w dowolnym momencie.',
    second:
      'Wszelkie zmiany będą komunikowane użytkownikom poprzez odpowiednie kanały informacyjne.'
  }
]
</script>
<template>
  <div class="info">
    <div class="info__block">
      <span class="info__block-header"><p>Autor</p></span>
      <div class="info__block-item">
        <p>Igor Sarwiński</p>
      </div>
      <div class="info__block-item">
        <p>092793 Informatyka</p>
      </div>
      <div class="info__block-item">
        <a class="info__block-item-link" href="https://github.com/Igor-Sarwinski" target="_blank">
          <img class="info__block-item-img" src="../assets/img/github.png" alt="Github" />
        </a>
      </div>
    </div>
    <div class="info__block info__block--bigger">
      <span class="info__block-header"><p>Regulamin</p></span>
      <div class="info__block-item">
        <ol class="info__block-list">
          <RuleItem
            v-for="rule in rules"
            :key="rule.id"
            :header="rule.header"
            :first="rule.first"
            :second="rule.second"
          />
        </ol>
      </div>
    </div>
  </div>
</template>
