game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	 // area01 tileset
	{name: "area01_level_tiles",  type:"image", src: "/assets/map/area01_level_tiles.png"},

	// meta tileset
	{name: "metatiles32x32",  type:"image", src: "/assets/map/metatiles32x32.png"},
    // the main player spritesheet
    {name: "gripe_run_right",     type:"image", src: "/assets/sprite/gripe_run_right.png"},
    // the parallax background
    {name: "area01_bkg0",         type:"image", src: "/assets/area01_bkg0.png"},
    {name: "area01_bkg1",         type:"image", src: "/assets/area01_bkg1.png"},
    // Title Screen Background
    {name: "title_screen",         type:"image", src: "/assets/gui/title_screen.png"},
    // the spinning coin spritesheet
    {name: "spinning_coin_gold",  type:"image", src: "/assets/sprite/spinning_coin_gold.png"},
    // our enemty entity
    {name: "wheelie_right",       type:"image", src: "/assets/sprite/wheelie_right.png"},
    // game font
    {name: "32x32_font",          type:"image", src: "/assets/font/32x32_font.png"},
    // Bullet Sprite
    {name: "bullet",       type:"image", src: "/assets/sprite/bullet.png"},
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
 	{name: "area01", type: "tmx", src: "/assets/map/area01.tmx"},
 	{name: "area02", type: "tmx", src: "/assets/map/area02.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	// {name: "dst-inertexponent", type: "audio", src: "/assets/audios/dst-inertexponent.mp3", channel : 1},

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
	// {name: "cling", type: "audio", src: "/assets/audios/cling.mp3", channel : 2},
 //    {name: "stomp", type: "audio", src: "/assets/audios/stomp.mp3", channel : 1},
 //    {name: "jump",  type: "audio", src: "/assets/audios/jump.mp3", channel : 1}
];
