<script lang="ts">
  import Titulo from './lib/Titulo.svelte'
  import Usuario from './lib/Usuario.svelte';
  import Header from './lib/Header.svelte';
  import type IUsuario from './interfaces/IUsuario';
  import Form from './lib/Form.svelte';

  let search: string = '';
  let user: IUsuario|null = null;

  function setUser(event: CustomEvent<IUsuario|null>){
    user=event.detail;
    console.log(user);
  }

</script>

<div class="app">
  <Header on:onUserChange={setUser} />
  {#if user}
    <Usuario {user} />
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }
</style>