<script>
    let mode = "dark";

    const toggleMode = (e) => {
        //Change to hide/show, not changed path
        //modeIcon = modeIcon === darkIcon ? lightIcon : darkIcon;
        mode = mode === "dark" ? "light" : "dark";
    }

</script>

<navbar id="navbar" class="navbar-menu">
	<div class="navbar-home"><img src="./assets/icon/favicon-32x32.png" alt="x" class="home-logo"> Alexander Brandstrup</div>

	<div class="navbar-button">Experience</div>
	<div class="navbar-button">Current Work</div>
	<div class="navbar-button"><img src="./assets/icon/GitHub-Mark-Light-32px.png" alt="x" class="source-logo"> Source</div>

    {#if mode === "dark"}
        <img src="./assets/icon/dark-mode-icon.svg" alt="x" class="toggle-light-icon" id="toggle-mode" on:click={toggleMode}>
    {:else}
        <img src="./assets/icon/light-mode-icon.svg" alt="x" class="toggle-light-icon" id="toggle-mode" on:click={toggleMode}>
    {/if}
	
</navbar>

<style>
    .navbar-menu {
	    position: sticky;
        z-index: 1;
	    top: 0;
        background-color: #202023;
		display: flex;
		justify-content: center;
	}
	.navbar-home {
        font-weight: bold;
        margin: 10px;
	}
	.navbar-button {
		margin: 10px;
        width: fit-content;
	}
    .home-logo {
        height: 15px;
    }
    .source-logo {
        height: 13px;
    }
    .toggle-light-icon {
        margin-top: 10px;
        margin-left: 50px;
        width:25px;
        height: 25px;
        border-radius: 20%;
    }

</style>