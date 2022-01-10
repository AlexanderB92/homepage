<script>
    const darkIcon = "./assets/icon/dark-mode-icon.svg"
    const lightIcon = "./assets/icon/light-mode-icon.svg"

    let mode = "dark";
    $: modeIcon = darkIcon;

    const toggleMode = (e) => {
        
        modeIcon = modeIcon === darkIcon ? lightIcon : darkIcon;
    }

</script>

<navbar id="navbar" class="navbar-menu">
	<div class="navbar-home"><img src="./assets/icon/favicon-32x32.png" alt="x" class="home-logo"> Alexander Brandstrup</div>

	<div class="navbar-button">Experience</div>
	<div class="navbar-button">Current Work</div>
	<div class="navbar-button"><img src="./assets/icon/GitHub-Mark-Light-32px.png" alt="x" class="source-logo"> Source</div>

	<img src={modeIcon} alt="x" class="toggle-light-icon" id="toggle-mode" on:click={toggleMode}>
</navbar>

<style>
    .navbar-menu {
	    position: sticky;
	    top: 0;
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