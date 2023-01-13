<template>
  <div class="col-12" v-if="pagination.last_page!=1">
    <nav aria-label="Page navigation example" class="row justify-content-center">
      <ul class="pagination">
          <li v-if="pagination.current_page > 1">
          <a v-on:click.prevent="changePage(pagination.current_page - 1)" href="javascript:void(0)" class="page-link">
                  Previous
          </a>
          </li>
          <li v-for="(page, index) in pagesNumber" class="page-item" :key="index" :class="{'active': page == pagination.current_page}">
            <a class="page-link" href="javascript:void(0)"  v-on:click.prevent="changePage(page)">
              {{ page }}</a>
          </li>
          <li v-if="pagination.current_page < pagination.last_page" class="page-item">
            <a href="javascript:void(0)" v-on:click.prevent="changePage(pagination.current_page + 1)" class="page-link">
                  Next
            </a>
          </li>
        </ul>
    </nav>

  </div>
</template>
<script>
  export default{
      props: {
      pagination: {
          type: Object,
          required: true
      },
      offset: {
          type: Number,
          default: 10
      }
    },
    computed: {
      pagesNumber() {
        if (!this.pagination.to) {
          return [];
        }
        let from = this.pagination.current_page - this.offset;
        if (from < 1) {
          from = 1;
        }
        let to = from + (this.offset * 2);
        if (to >= this.pagination.last_page) {
          to = this.pagination.last_page;
        }
        let pagesArray = [];
        for (let page = from; page <= to; page++) {
          pagesArray.push(page);
        }
          return pagesArray;
      }
    },
    methods : {
      changePage(page) {
        this.pagination.current_page = page;
        this.$emit('paginate',page);
      }
    }
  }
</script>
