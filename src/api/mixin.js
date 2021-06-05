import totop from 'components/totop'
import toptitle from "components/toptitle/toptitle";


export const TOTOP = {
  methods: {
    gotop() {
      this.scroll.scrollTo(0, 0, 1000)
    },
    load() {
      this.scroll && this.scroll.refresh();
    },
  },
  components: {
    totop,
    toptitle
  }
}