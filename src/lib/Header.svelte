<script>
  import Titulo from './Titulo.svelte';
  import Form from './Form.svelte';
</script>

<header>
  <Titulo />
  <div class="busca-usuario">
    <Form on:onUserChange />
  </div>
</header>

<style>
  header {    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .busca-usuario {
    position: relative;
    width: 60%;
  }
</style>