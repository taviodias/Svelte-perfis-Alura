<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import type IUsuario from '../interfaces/IUsuario';
  import {searchUser, searchRepos} from '../requests';
  import {mountUser} from '../utils/mountUser';
  import Button from './Button.svelte';

  let search: string ='';
  let responseStatus: decimal = 0;

  const dispatch = createEventDispatcher<{
    onUserChange: IUsuario|null
  }>();

  async function onSubmit(){
    const response = await searchUser(search);
    const responseRepos = await searchRepos(search);
    responseStatus = response.status;
    // console.log(response);
    if(response.ok && responseRepos.ok){
      const dataUser = await response.json();
      const dataRepos = await responseRepos.json();
      // console.log(dataRepos);

      dispatch('onUserChange',mountUser(dataUser, dataRepos));
    }
    else{
      dispatch('onUserChange',null);
    }
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <input 
    type="text" 
    class="input"
    class:erro-input={responseStatus === 404} 
    bind:value={search} 
    placeholder="Pesquise aqui o usuário">
  {#if responseStatus === 404}
    <span class="erro">Usuário não encontrado!</span>
  {/if}
  <div class="botao-container">
    <Button>
      Buscar
      <img src="../lupa.svg" alt="lupa">
    </Button>
  </div>
</form>

<style>
  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro-input{
    border: 1px solid #ff003e;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }
</style>