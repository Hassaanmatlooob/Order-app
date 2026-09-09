// --- INVENTORY ITEMS DATA ARRAY ---
const items = [
    "APOLLO 210 ML PLAIN (1X6)X12",
    "APOLLO 210 ML (Select Your Print Number) (1X6)X12",
    "APOLLO WATER SET PLAIN (1+6)X6",
    "APOLLO WATER SET (Select Your Print Number) (1+6)X6",
    "APPLE JUICE MUG 415 ML (RA) (1X4)X6",
    "ARONA 280 ML A1 SERIES (1X6)X12",
    "ARONA 300 ML A1 Series (1X6)X12",
    "ASORTED FRUIT SET R.A THERMO (1+6)X6",
    "AURIGA 280 ML A1 SERIES (1X6)X12",
    "AURIGA 300 ML A1 Series (1X6)X12",
    "BELL 280 ML Goblet  (1X6)X12",
    "BELL TEA CUP (1X6)X16",
    "BERG STAR 280 ML Goblet  (1X6)X12",
    "BEST TEA CUP (1X6)X16",
    "BLINK STAR 280 ML Goblet  (1X6)X12",
    "BLINK STAR CUP (1X6)X12",
    "BLINK STAR CUP (1X6)X16",
    "BLINK TEA CUP (R.A) (1X6)X12",
    "BLOOM 280 ML (1X6)X12",
    "BLOOM STAR 280 ML Goblet  (1X6)X12",
    "BLOOM TEA CUP (R.A) (1X6)X12",
    "BLOSSOM 280 ML (1X6)X12",
    "BLOW 280 ML (1X6)X12",
    "BLUE BELL 280 ML (1X6)X12",
    "BOLD TEA CUP (1X6)X16",
    "BOOM 280 ML (1X6)X12",
    "BOOM 280 ML (Select Your Print Number) (1X6)X12",
    "BOOM 300 ML (1X6)X12",
    "BOOM 300 ML (Select Your Print Number)(1X6)X12",
    "BOOM WATER SET (Select Your Print Number)",
    "BOSS TEA CUP (1X6)X16",
    "CAPITAL 300 ML (1X6)X12",
    "CAROL DIAMOND JUG C.B.W.L (1X1)X12",
    "CAROL JUG C.B.W.L (1X1)X12",
    "CAROL PRISM JUG C.B.W.L (1X1)X12",
    "CAROL STAR JUG C.B.W.L (1X1)X12",
    "CHAMP STAR 280 ML Goblet  (1X6)X12",
    "CITIZEN 280 ML (1X6)X12",
    "CITIZEN 300 ML (1X6)X12",
    "CLASSIC ASORTD CAKE SET PLN 5-D(1+6)x6",
    "CLASSIC CRUNCH 280 ML (1X6)X12",
    "CLASSIC CRUNCH 300 ML (1X6)X12",
    "CLASSIC CRUNCH BOWL SMALL (1x6)x12",
    "CLASSIC CRUNCH CAKE SET (1+6)X6",
    "CLASSIC CRUNCH FRUIT SET W/H (1+6)x6",
    "CLASSIC CRUNCH Goblet  (1x6)x8",
    "CLASSIC CURLY 280 ML (1X6)X12",
    "CLASSIC CURLY 300 ML (1X6)X12",
    "CLASSIC CURLY BOWL SMALL (1x6)x12",
    "CLASSIC CURLY CAKE SET (1+6)X6",
    "CLASSIC CURLY FRUIT SET W/H (1+6)x6",
    "CLASSIC CURLY Goblet  (1x6)x8",
    "CLASSIC LOTUS 280 ML (1X6)X12",
    "CLASSIC LOTUS 300 ML (1X6)X12",
    "CLASSIC LOTUS BOWL SMALL (1x6)x12",
    "CLASSIC LOTUS CAKE SET (1+6)X6",
    "CLASSIC LOTUS FRUIT SET W/H (1+6)x6",
    "CLASSIC LOTUS Goblet  (1x6)x8",
    "CLASSIC POLO 280 ML (1X6)X12",
    "CLASSIC POLO 300 ML (1X6)X12",
    "CLASSIC POLO BOWL SMALL (1x6)x12",
    "CLASSIC POLO CAKE SET (1+6)X6",
    "CLASSIC POLO FRUIT SET W/H (1+6)x6",
    "CLASSIC POLO Goblet  (1x6)x8",
    "CLASSIC SERIES Goblet  ASSORTED(1x2)X24",
    "CLASSIC SUN CAKE SET (1+6)X6",
    "CLASSIC SUN FLOWER SMALL BOWL (1x6)X12",
    "CLASSIC SUNFLOWER 280 ML (1X6)X12",
    "CLASSIC SUNFLOWER 300 ML (1X6)X12",
    "CLASSIC SUNFLOWER FRUIT SET W/H(1+6)x6",
    "CLASSIC SUNFLOWER Goblet  (1X6)X8",
    "CLUB Goblet  CSG-1010 (1x6)x8",
    "CLUB Goblet  CSG-1020 (1x6)x8",
    "CLUB Goblet  CSG-1030 (1x6)x8",
    "CLUB Goblet  CSG-1040 (1x6)x8",
    "CLUB Goblet  CSG-1050 (1x6)x8",
    "CLUB Goblet  CSG-1060 (1x6)x8",
    "CLUB Goblet  CSG-1070 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1010 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1020 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1030 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1040 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1050 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1060 (1x6)x8",
    "CLUB MAX GOBLET CMSG-1070 (1x6)x8",
    "CLUB SERIES Goblet  ASSORTED (1x2)X24",
    "COSTA 280 ML Goblet  (1X6)X12",
    "COSTA COFFEE MUG - OG",
    "COSTA Goblet  300 ML (1X6)X12",
    "COSTA GOLD Goblet  280 ML (1X6)X12",
    "COSTA GOLD WATER SET THERMO(OR)(1+6)X6",
    "COSTA GOLD WATER SET THERMO(RA)(1+6)X6",
    "COSTA STAR 280 ML Goblet  (1X6)X12",
    "COSTA WATER SET OR (REG) (1+6)X6",
    "CROSS COFFEE MUG (OG) (1X6)X12",
    "CROSS COFFEE MUG (R.A) (1X6)X12",
    "CRUNCH COFFEE MUG (O.R.G) (1x6)x12",
    "DAKANEE BUBBLE MUG 380ML (1X6)X8",
    "DAKANEE CAPTAIN BERG ICC RA/OR (1x6)x8",
    "DAKANEE CAPTAIN BLOOM ICC RA/OR(1x6)x8",
    "DAKANEE CAPTAIN COSTA ICC RA/OR(1x6)x8",
    "DAKANEE CAPTAIN FISH ICC OR/RA(1X6)X8",
    "DAKANEE CAPTAIN PLAIN Goblet  (1X2)x12",
    "DAKANEE CAPTAIN PLAIN ICC OR/RA(1X6)X8",
    "DAKANEE COSTA MUG 380ML (1X6)X8",
    "DAKANEE ELITE CRUNCH FRUIT SET (1+6)x4",
    "DAKANEE ELITE CURLY FRUIT SET (1+6)x4",
    "DAKANEE ELITE FISH FRUIT SET (1+6)x4",
    "DAKANEE ELITE LUNA FRUIT SET (1+6)x4",
    "DAKANEE ELITE SAGE FRUIT SET (1+6)x4",
    "DAKANEE ELITE SUNFLOWER FRUIT SET1+6x4",
    "DAKANEE GRAPES MUG 380ML (1X6)X8",
    "Twist tea cup"
    "DAKANEE PLAIN MUG 380ML (1X6)X8",
    "DAKANEE POLKA ASSORTED FRUIT SET (1+6)x4",
    "DAKANEE POLKA BERG ICC OR/RA(1X2)X24",
    "DAKANEE POLKA BLINK FRUIT SET (1+6)X4",
    "DAKANEE POLKA BLINK ICC OR/RA(1X2)X24",
    "DAKANEE POLKA BLOOM FRUIT SET (1+6)X4",
    "DAKANEE POLKA BLOOM ICC OR/RA(1X2)X24",
    "DAKANEE POLKA COSTA FRUIT SET (1+6)X4",
    "DAKANEE POLKA COSTA ICC OR/RA(1X2)X24",
    "DAKANEE POLKA PLAIN FRUIT SET (1+6)X4",
    "DAKANEE POLKA PLAIN ICC OR/RA(1X2)X24",
    "DAKANEE SAGE MUG 380ML (1X6)X8",
    "DAKANEE VINTAGE MUG 380ML (1X6)X8",
    "DAKANEE VITAL MUG 380ML (1X6)X8",
    "DAWN TEA CUP ORG BOLAN SERIES (1x6)x16",
    "DECENT STAR CUP & SAUCER SET OR(6+6)x6",
    "DECENT STAR CUP (1X6)X12",
    "DECENT STAR CUP (1X6)X16",
    "DECENT STAR TEA SET THERM OR(6+6)x6",
    "DEW BOWL SET SPINREX (1+6)X8 THERMO",
    "DIAMOND BLINK WATER SET (THERM) (1+6)X6",
    "DIAMOND BLOOM WATER SET (THERM) (1+6)X6",
    "DIAMOND BOWL SET SPINREX (1+6)X8 THERMO",
    "DIAMOND CLASSY (1X6)X12",
    "DIAMOND CRUNCH WATER SET (THERM) (1+6)X6",
    "DIAMOND FISH WATER SET (THERM) (1+6)X6",
    "DIAMOND KIWI WATER SET (THERM) (1+6)X6",
    "DIAMOND SONIC GOB 280 ML (1X6)X12",
    "DIAMOND SPARK WATER SET (THERM) (1+6)X6",
    "DIAMOND TEA CUP (1X6)X16",
    "DIAMOND ZINNIA WATER SET (THERM) (1+6)X6",
    "DIMPLE STAR CUP & SAUCER SET OR(6+6)x6",
    "DIMPLE STAR CUP (1X6)X12",
    "DIMPLE STAR TEA SET THERM OR(6+6)x6",
    "DOLLAR 280 ML (1X6)X12",
    "EDGE 280 ML (1X6)X12",
    "ELITE SERIES ASPIRE 280 ML OR (1X6)X12",
    "ELITE SERIES ASPIRE 300 ML OR (1X6)X12",
    "ELITE SERIES CRAVE 280 ML OR (1X6)X12",
    "ELITE SERIES CRAVE 300 ML OR (1X6)X12",
    "ELITE SERIES DELIGHT 280 ML OR(1X6)X12",
    "ELITE SERIES DELIGHT 300 ML OR (1X6)X12",
    "ELITE SERIES METAL 280 ML OR (1X6)X12",
    "ELITE SERIES METAL 300 ML OR (1X6)X12",
    "ENGLISH JUICE MUG 415 ML 01 OR(1x2)x12",
    "ENGLISH JUICE MUG 415 ML 02 OR(1x2)x12",
    "ENGLISH JUICE MUG 415 ML 03 OR(1x2)x12",
    "ENGLISH JUICE MUG 415 ML 04 OR (1X2)X12",
    "ENGLISH JUICE MUG 450 ML 01 (1X4)x6",
    "ENGLISH JUICE MUG 450 ML 02 (1X4)x6",
    "FANCY COFFEE MUG (OG) (1X6)X12",
    "FISH 280 ML Goblet  (1X6)X12",
    "FISH 280 ML Goblet  (B.B) (1X6)X12",
    "FISH BOWL LARGE (B.B) (1X3)X4",
    "FISH BOWL SMALL (B.B) (1X6)X12",
    "FISH CAKE SET (1+6)X6",
    "FISH FRUIT SET (1+6)X6",
    "FISH FRUIT SET (THERMOPORE PACKING) (1+6)X6",
    "FISH Goblet  300 ML (1X6)X12",
    "FISH Goblet  300 ML (B.B) (1X6)X12",
    "FISH GOLD COFFEE MUG (1X6)X12",
    "FISH GOLD WATER SET THERMO(OG)(1+6)X6",
    "FISH GOLD WATER SET THERMO(RA)(1+6)X6",
    "FISH ICE CREAM CUP (1X6)X12",
    "FISH SMART WATER SET (THERMO) (1+6)X6",
    "FISH STAR TEA CUP (1X6)X12",
    "FISH STAR TEA CUP (1X6)X16",
    "FISH STAR TEA SET (6+6)X6",
    "FISH TEA CUP (1X6)X16",
    "FISH TEA CUP (B.B) (1X6)X12",
    "FISH TEA SAUCER (B.B) (1X6)X12",
    "FISH TEA SET (6+6)X6",
    "FISH WATER SET OR (REG) (1+6)X6",
    "FLAME 280 ML (1X6)X12",
    "FLAME 300 ML (1X6)X12",
    "FLAME 300 ML (1X6)X12   X",
    "FLICK TEA CUP ORG BOLAN SERIES(1x6)x16",
    "FLINT 280 ML Goblet  (1X6)X12",
    "FLINT 280 ML Goblet  (B.B) (1X6)X12",
    "FLINT BOWL LARGE (B.B) (1X3)X4",
    "FLINT BOWL SMALL (B.B) (1X6)X12",
    "FLINT CAKE SET (1+6)X6",
    "FLINT FRUIT SET (1+6)X6",
    "FLINT Goblet  300 ML (1X6)X12",
    "FLINT Goblet  300 ML (B.B) (1X6)X12",
    "FLINT ICE CREAM CUP (1X6)X12",
    "FLINT STAR TEA CUP (1X6)X12",
    "FLINT STAR TEA CUP (1X6)X16",
    "FLINT STAR TEA SET (6+6)X6",
    "FLINT TEA CUP (1X6)X16",
    "FLINT TEA CUP (B.B) (1X6)X12",
    "FLINT TEA SAUCER (B.B) (1X6)X12",
    "FLINT TEA SET (6+6)X6",
    "FLORA BLINK JUG C.B.W.L (1x1)x12 R.A",
    "FLORA BLOOM JUG C.B.W.L (1X1)X12 - RA",
    "FLORA COSTA JUG C.B.W.L (1X1)X12",
    "FLORA COSTA JUG HONEY COMB (With Lid) (1X6) OR",
    "FLORA CRUNCH JUG C.B.W.L (1X1)X12 - ORG",
    "FLORA CRUNCH JUG C.B.W.L (1X1)X12 - RA",
    "FLORA FISH JUG C.B.W.L (1X1)X12 - RA",
    "FLORA JUG C.B.W.L (1X1)X12",
    "FLORA KIWI JUG C.B.W.L (1x1)x12 O.R.G",
    "FLORA PETAL JUG C.B.W.L (1X1)X12 - RA",
    "FLORA SHINE JUG C.B.W.L (1X1)X12",
    "FLORA SPARK JUG C.B.W.L (1X1)X12 - ORG",
    "FLORA SPARK JUG C.B.W.L (1X1)X12 - RA",
    "FLORA STAR JUG C.B.W.L (1X1)X12 - OG",
    "FLORA STAR JUG C.B.W.L (1X1)X12 - RA",
    "FLORA ZINNIA JUG C.B.W.L (1X1)X12 - RA",
    "FLORAL 280 ML Goblet  (1X6)X12",
    "FORESIGHT ASORTED FRT SET PLN 6-D(1+6)X6",
    "FRENCH FANCY Goblet  280 ML ORG (1X6)X8",
    "FRENCH FANCY Waterset THERMO O.R.G(1+6)X6",
    "FRENCH FEAST Goblet  280 ML ORG (1X6)X8",
    "FRENCH FLASH Goblet  280 ML ORG (1x6)x8",
    "FRENCH FLASH Waterset Thermo O.R.G(1+6)x6",
    "FRENCH FLOWER Goblet  280 ML ORG(1x6)x8",
    "FRENCH FLOWER Waterset Thermo ORG (1+6)x6",
    "FRENCH FUJI Goblet  280 ML ORG (1X6)X8",
    "FRENCH PLAIN Goblet  280 ML ORG (1X6)X8",
    "FRENCH PLAIN Waterset THERMO O.R.G(1+6)X6",
    "FROST 280 ML (1X6)X12",
    "FROST 300 ML (1X6)X12",
    "FROST 300 ML (1X6)X12   X",
    "GEM 280 ML Goblet  (1X6)X12",
    "GOLD FISH Goblet  280 ML (1X6)X12",
    "GRACE COFFEE MUG (OG) (1X6)X12",
    "GRAND 280 ML (1X6)X12",
    "GRAND 300 ML (1X6)X12",
    "GRAND 300 ML (1X6)X12  X",
    "GRAPES BOWL LARGE ORG (1x1)x12",
    "GRAPES BOWL SMALL ORG(1x6)x12",
    "GRAPES CAKE SET (1+6)X6",
    "GRAPES FRUIT SET (1+6)X6",
    "GRAPES FRUIT SET O.R.G (THERM) (1+6)X6",
    "GRAPES STAR 280 ML Goblet  (1X6)X12",
    "GRAPES STAR CUP & SAUCER SET RA(6+6)x6",
    "GRAPES STAR CUP (1X6)X12",
    "GRAPES STAR CUP (1X6)X16",
    "GRAPES STAR TEA SET THERM RA(6+6)x6",
    "ICON TEA CUP (1X6)X16",
    "IDEAL 300 ML (INDIGO SERIES)",
    "IDEAL TEA CUP INDUS SERIES (1X8)X12",
    "IMPACT 300 ML (INDIGO SERIES)",
    "IMPERIAL ICE 280 ML (1x6)x12",
    "IMPERIAL ICE 300 ML (1x6)x12",
    "IMPERIAL INSIGHT 280 ML (1x6)x12",
    "IMPERIAL INSIGHT 300 ML (1x6)x12",
    "IMPERIAL INTEL 280 ML (1x6)x12",
    "IMPERIAL INTEL 300 ML (1x6)x12",
    "INSTA 300 ML (INDIGO SERIES)",
    "INSTA TEA CUP INDUS SERIES (1X8)X12",
    "ITALIC 300 ML (INDIGO SERIES)",
    "ITALIC TEA CUP INDUS SERIES (1X8)X12",
    "IDEAL GOBLET ISG-555 (1x6)x8",
    "IDEAL GOBLET ISG-444 (1x6)x8",
    "IDEAL GOBLET ISG-333 (1x6)x8",
    "JAMBO COFFEE MUG (OG) (1X6)X12",
    "KARKAS 280 ML Goblet  (1X6)X12",
    "KARKAS 280 ML Goblet  (B.B) (1X6)X12",
    "KARKAS BOWL LARGE (B.B) (1X1)X12",
    "KARKAS CAKE SET (1+6)X6",
    "KARKAS FRUIT SET (1+6)X6",
    "KARKAS FRUIT SET O.R.G (THERM) (1+6)X6",
    "KARKAS Goblet  300 ML (B.B) (1X6X)12",
    "KARKAS ICE CREAM CUP (1X6)X12",
    "KARKAS STAR TEA CUP (1X6)X12",
    "KARKAS STAR TEA CUP (1X6)X16",
    "KARKAS STAR TEA SET (6+6)X6",
    "KARKAS TEA CUP (1X6)X16",
    "KARKAS TEA CUP (B.B) (1X6)X12",
    "KARKAS TEA SAUCER (B.B) (1X6)X12",
    "KARKAS TEA SET (6+6)X6",
    "KING BLINK BOWL SMALL (1X6)X12",
    "KING BLINK FRUIT SET O.R.G (1+6)X6",
    "KING BLINK FRUIT SET SMOKE GRAY(1+6)x6",
    "KING BLINK FRUIT SET THERM(1+6)X6",
    "KING DREAM BOWL SMALL (1x6)x12",
    "KING DREAM FRUIT SET O.R.G (1+6)X6",
    "KING DREAM FRUIT SET SMOKE GRAY(1+6)x6",
    "KING DREAM FRUIT SET THERM(1+6)X6",
    "KING RAIN DROP FRUIT SET O.R.G (1+6)X6",
    "KING RAIN DROP FRUIT SET THERM(1+6)x6",
    "KING RAINDROP FRT SET SMOKEGRAY(1+6)x6",
    "KING VITAL FRUIT SET O.R.G (1+6)X6",
    "KING VITAL FRUIT SET SMOKE GRAY(1+6)x6",
    "KING VITAL FRUIT SET THERM(1+6)X6",
    "KING ZINNIA BOWL SMALL (1x6)x12",
    "KING ZINNIA FRUIT SET O.R.G (1+6)X6",
    "KING ZINNIA FRUIT SET THERM(1+6)X6",
    "KING ZINNIA FRUT SET SMOKE GRAY(1+6)x6",
    "KINGSTON 280 ML (1X6)X12",
    "LAVISH FRUIT SET (R.A) (1+6)X6",
    "LAVISH S.W 2 80 ML Goblet  GIFT PACK (1X6)X8",
    "LAVISH SMART WATER SET (THERMO) (1+6)X6",
    "LEADER 280 ML (1X6)X12",
    "LILAC 280 ML Goblet  (1X6)X12",
    "LOGO 280 ML PLAIN (1X6)X12",
    "LOGO 280 ML (Select Your Print Number) (1X6)X12",
    "LOGO 300 ML PLAIN (MEGA) (1X6)X12",
    "LOGO WATER SET (Select Your Print Number) (1+6)X6",
    "LUMINAR 280 ML Goblet  (1X6)X12",
    "LUNA FRUIT SET (R.A) (1+6)X6",
    "LUSH TEA CUP (R.A) (1X6)X12",
    "LUSTER 280 ML (1X6)X12",
    "MAX COFFEE MUG (1X6)X12",
    "MAX FRUIT SET (R.A) (1+6)X6",
    "MAX STAR 280 ML Goblet  (1X6)X12",
    "MEDIUM BOWL SET FISH CLR (1x6)x8",
    "MEDIUM BOWL SET GRAPES CLR (1x6)x8",
    "MEDIUM BOWL SET PLAIN CLR (1x6)x8",
    "MEDIUM BOWL SET SAGE CLR (1x6)x8",
    "MEDIUM BOWL SET VINTAGE CLR (1x6)x8",
    "MEDIUM BOWL SET ZINNIA CLR (1x6)x8",
    "MEGA 280 ML (1X6)X12",
    "MEGA TEA CUP (1x6)x12 O.R.G",
    "MELODY TEA CUP (1x6)x12 O.R.G",
    "MEPAL FRUIT SET (R.A) (1+6)X6",
    "MIGHTY TEA CUP (1x6)x12 O.R.G",
    "MILKY TEA CUP (1x6)x12 O.R.G",
    "NEW BRIGHT SMART Goblet  (1X6)X12",
    "NEW DECENT STAR 280 ML Goblet  (1X6)X12",
    "NEW DIMPLE STAR 280 ML Goblet  (1X6)X12",
    "NEW FISH SMART Goblet  (1X6)X12",
    "NEW FISH STAR 280 ML Goblet  (1X6)X12",
    "NEW FOREST SMART Goblet  (1X6)X12",
    "NEW LAVISH SMART Goblet  (1X6)X12",
    "NEW SWISS SMART Goblet  (1X6)X12",
    "NEW VITAL STAR 280 ML Goblet  (1X6)X12",
    "OPAL 210 ML (O.R.G) (1X6)X12",
    "OPAL 210 ML (Select Your Print Number)(1X6)X12",
    "OPAL WATER SET P-04 (1+6)X6",
    "ORANGE JUICE MUG 415 ML (O.R.G)(1x4)x6",
    "ORCHID BOWL SET SPINREX (1+6)X8 THERMO",
    "ORCHID CLASSY (1X6)X12",
    "ORIENT 300 ML (1X6)X12",
    "PACE COFFEE MUG (R.A) (1X6)X12",
    "PALM S.W 2 80 ML Goblet  GIFT PACK (1X6)X8",
    "PARAGON 280 ML (1X6)X12",
    "PEAK 280 ML (1X6)X12",
    "PEARL COFFEE MUG (1X6)X12",
    "PEARL PACE(PLAIN) COFFEE MUG 72PC R.A-54",
    "PEARL PACE(PLAIN) COFFEE MUG 72PC R.A-55",
    "PENTA 280 ML (1X6)X12",
    "PERK COFFEE MUG (R.A) (1X6)X12",
    "PETAL COFFEE MUG (R.A) (1X6)X12",
    "PETAL FRUIT SET (R.A) (1+6)X6",
    "PIKE 280 ML Goblet  (1X6)X12",
    "PIXEL TEA CUP ORG BOLAN SERIES(1x6)x16",
    "PLAIN 280 ML (1X6)X12",
    "PLAIN COFFEE MUG (O.R.G) (1x6)x12",
    "PLAIN COFFEE MUG (RED APPLE) (1X6)X12",
    "PLAIN COFFEE MUG CLR (1X6)X12",
    "PLAIN COFFEE MUG RA-PCM-001 (1X6)X12",
    "PLAIN COFFEE MUG RA-PCM-002 (1X6)X12",
    "PLAIN COFFEE MUG RA-PCM-003 (1X6)X12",
    "PLAIN GOLD COFFEE MUG (1x6)x12",
    "PLAIN GOLD COFFEE MUG (1X6)X12 Ravi Gold",
    "PLAIN GOLD TEA CUP (1x6)x12",
    "PLAIN TEA CUP BOLAN SERIES (1X8)X12",
    "PLAIN TEA CUP INDUS SERIES (1X8)X12",
    "PLAIN TEA CUP RACHNA SERIES (1X6)X16",
    "PLAIN TEA CUP RAVI SERIES (1X6)X16",
    "POLO COFFEE MUG (R.A) (1X6)X12",
    "PUNCH 280 ML (1X6)X12",
    "RACHNA PLAIN TEA CUP CLR (1X6)X16",
    "RACHNA RIO TEA CUP CLR (1X6)X16",
    "RACHNA ROCKY TEA CUP CLR (1X6)X16",
    "RADIANT 280 ML (1X6)X12",
    "RADIANT GOLD COFFEE MUG (1x6)x12",
    "RADISH GOLD COFFEE MUG (1X6)X12 Ravi Gold",
    "RADISH GOLD TEA CUP (1x6)x12",
    "RADISH TEA CUP RAVI SERIES (1X6)X16",
    "RAIN DROP FRUIT SET (R.A) (1+6)X6",
    "RAINBOW 300 ML (1X6)X12",
    "RAVI PLAIN TEA CUP CLR (1X6)X16",
    "RAVI RADISH TEA CUP CLR (1X6)X16",
    "RAVI ROLEX TEA CUP CLR (1X6)X16",
    "RAYAN ASORTED CAKE SET PLN 6-D(1+6)X6",
    "RAYAN LAVISH 280 ML (1X6)X12",
    "RAYAN LAVISH 300 ML (1X6)X12",
    "RAYAN LAVISH BOWL SMALL (1x6)X12",
    "RAYAN LAVISH CAKE SET (R.A) (1+6)X6",
    "RAYAN LAVISH TEA CUP (1X6)X12",
    "RAYAN LUNA 280 ML (1X6)X12",
    "RAYAN LUNA 300 ML (1X6)X12",
    "RAYAN LUNA BOWL SMALL (1x6)X12",
    "RAYAN LUNA CAKE SET (R.A) (1+6)X6",
    "RAYAN MAX 280 ML (1X6)X12",
    "RAYAN MAX 300 ML (1X6)X12",
    "RAYAN MAX BOWL SMALL (1x6)X12",
    "RAYAN MAX CAKE SET (R.A) (1+6)X6",
    "RAYAN MAX TEA CUP (1X6)X12",
    "RAYAN MEPAL 280 ML (1X6)X12",
    "RAYAN MEPAL 300 ML (1X6)X12",
    "RAYAN MEPAL BOWL SMALL (1x6)X12",
    "RAYAN MEPAL CAKE SET (R.A) (1+6)X6",
    "RAYAN MEPAL TEA CUP (1X6)X12",
    "RAYAN PETAL 280 ML (1X6)X12",
    "RAYAN PETAL 300 ML (1X6)X12",
    "RAYAN PETAL CAKE SET (R.A) (1+6)X6",
    "RAYAN PETAL TEA CUP (1X6)X12",
    "RAYAN RAIN DROP 280 ML (1X6)X12",
    "RAYAN RAIN DROP 300 ML (1X6)X12",
    "RAYAN RAIN DROP BOWL SMALL (1x6)X12",
    "RAYAN RAIN DROP CAKE SET (R.A) (1+6)X6",
    "RAYAN RAIN DROP TEA CUP (1X6)X12",
    "REGAL 300 ML (1X6)X12",
    "REGENT 280 ML (1X6)X12",
    "REGENT GOLD COFFEE MUG (1X6)X12 Ravi Gold",
    "REGENT GOLD TEA CUP (1x6)x12",
    "REGENT TEA CUP RAVI SERIES ORG(1x6)x16",
    "RINGO TEA CUP CLR (1X6)X16",
    "RINGO TEA CUP RACHNA SERIES (1X6)X16",
    "RIO TEA CUP RACHNA SERIES (1X6)X16",
    "ROCK 300 ML (1X6)X12",
    "ROCKY TEA CUP RACHNA SERIES (1X6)X16",
    "ROLEX GOLD COFFEE MUG (1x6)x12",
    "ROLEX GOLD COFFEE MUG (1X6)X12 Ravi Gold",
    "ROLEX TEA CUP RAVI SERIES (1X6)X16",
    "ROMANCE S.W 2 80 ML Goblet  GIFT PACK (1X6)X8",
    "ROSE 300 ML (1X6)X12",
    "ROYAL STAR 280 ML Goblet  (1X6)X12",
    "RT-DIAMOND CLASSY (1X6)X12 SPINREX",
    "RT-ORCHID CLASSY (1X6)X12 SPINREX",
    "RT-SPECKS CLASSY (1X6)X12 SPINREX",
    "RT-SUNNY CLASSY (1X6)X12 SPINREX",
    "RT-WOODY CLASSY (1X6)X12 SPINREX",
    "SAGE BOWL LARGE (BROWN ) RA (1x3)x4",
    "SAGE CAKE SET (1+6)X6",
    "SAGE FRUIT SET (1+6)X6",
    "SAGE FRUIT SET (THERMOPORE PACKING) (1+6)X6",
    "SAGE STAR 280 ML Goblet  (1X6)X12",
    "SAGE STAR CUP & SAUCER SET RA(6+6)x6",
    "SAGE STAR CUP & SAUCER SET RA(6+6)x8",
    "SAGE STAR CUP (1X6)X12",
    "SAGE STAR CUP (1X6)X16",
    "SAGE STAR TEA SET THERM RA(6+6)x6",
    "SHARP 300 ML (1X6)X12",
    "SLIM 300 ML (1X6)X12",
    "SLIM TEA CUP (1X6)X16",
    "SMART 300 ML (1X6)X12",
    "SMART TEA CUP (1X6)X16",
    "SOLID 300 ML (1X6)X12",
    "SONIC TEA CUP (R.A) (1X6)X12",
    "SPANISH 210 ML (1X6)X12",
    "SPANISH 280 ML (1X6)X12",
    "SPANISH 300 ML (1X6)X12",
    "SPECKS BOWL SET SPINREX (1+6)X8 THERMO",
    "SPECKS CLASSY (1X6)X12",
    "SPOT 300 ML (1X6)X12",
    "SUNNY BOWL SET SPINREX (1+6)X8 THERMO",
    "SUNNY CLASSY (1X6)X12",
    "SWIFT 300 ML (1X6)X12",
    "SWING 300 ML (1X6)X12",
    "SWISS CROWN Goblet  280 ML RA (1X6)X12",
    "SWISS CROWN Goblet  280 ML RA (1X6)X8",
    "SWISS CRUNCH Goblet  280 ML RA (1X6)X12",
    "SWISS CRUNCH Goblet  280 ML RA (1X6)X8",
    "SWISS CRUNCH Waterset THERMOPACK RA (1+6)X6",
    "SWISS FISH Goblet  280 ML RA (1X6)X12",
    "SWISS FISH Goblet  280 ML RA (1X6)X8",
    "SWISS FISH Waterset THERMOPACK RA (1+6)X6",
    "SWISS LAVISH Goblet  280 ML RA (1X6)X12",
    "SWISS LAVISH Goblet  280 ML RA (1X6)X8",
    "SWISS LAVISH Waterset THERMOPACK RA (1+6)X6",
    "SWISS ZINNIA Goblet  280 ML RA (1X6)X12",
    "SWISS ZINNIA Goblet  280 ML RA (1X6)X8",
    "SWISS ZINNIA Waterset THERMOPACK RA (1+6)X6",
    "TERRA FISH BOWL MEDIUM (1x6)x8",
    "TERRA FISH DESSERT DISH MED (1x2)x18",
    "TERRA GRAPES BOWL MEDIUM (1x6)x8",
    "TERRA GRAPES DESSERT DISH MED (1x2)x18",
    "TERRA KARKAS DESSERT DISH MED (1x2)x18",
    "TERRA PLAIN BOWL MEDIUM (1x6)x8",
    "TERRA PLAIN DESSERT DISH MED (1x2)x18",
    "TERRA SAGE BOWL MEDIUM (1x6)x8",
    "TERRA SAGE DESSERT DISH MED (1x2)x18",
    "TERRA VINTAGE BOWL MEDIUM (1x6)x8",
    "TERRA VINTAGE DESSERT DISH MED(1x2)x18",
    "TERRA ZINNIA BOWL MEDIUM (1x6)x8",
    "TERRA ZINNIA DESSERT DISH MED (1x2)x18",
    "TITAN TEA CUP (1X6)X12",
    "TOPAZ 300 ML (1X6)X12",
    "TOSS TEA CUP (1X6)X12",
    "TRENDY TEA CUP (1X6)X12",
    "TROY TEA CUP (1X6)X12",
    "TUC COFFEE MUG (1X6)X12",
    "TULIP 300 ML (1X6)X12",
    "TURKISH 280 ML (1X6)X12",
    "TURKISH JUICE MUG 415 ML (RA) (1X4)X6",
    "TURKISH PLAIN COFFEE MUG (1X6)X12",
    "TURKISH RAINDROP COFFEE MUG (1X6)X12",
    "TURKISH SAGE COFFEE MUG (1X6)X12",
    "TWINKLE 300 ML (1X6)X12",
    "TWIST TEA CUP (1X6)X12",
    "VIGO 280 ML (1X6)X12",
    "VIGO 300 ML (1X6)X12",
    "VIGO PLUS 280 ML (1X6)X12",
    "VIGO PLUS 300 ML (1X6)X12",
    "VINTAGE 280 ML Goblet  (1X6)X12",
    "VINTAGE CAKE SET (1+6)X6",
    "VINTAGE FRUIT SET (1+6)X6",
    "VINTAGE FRUIT SET O.R.G (THERM) (1+6)X6",
    "VINTAGE Goblet  300 ML (1X6)X12",
    "VINTAGE STAR CUP (1X6)X12",
    "VINTAGE STAR CUP&SAUCER SET OR(6+6)x6",
    "VINTAGE STAR TEA SET THERM OR(6+6)x6",
    "VITAL 280 ML Goblet  (1X6)X12",
    "VITAL CAKE SET (1+6)X6",
    "VITAL FRUIT SET (1+6)X6",
    "VITAL FRUIT SET (THERMOPORE PACKING) (1+6)X6",
    "VITAL STAR CUP & SAUCER SET RA(6+6)x6",
    "VITAL STAR CUP & SAUCER SET RA(6+6)x8",
    "VITAL STAR CUP (1X6)X12",
    "VITAL STAR CUP (1X6)X16",
    "VITAL STAR TEA SET THERM RA(6+6)x6",
    "VNTG/GRP/KAR ASS.F.SET O.R THR.(1+6)x6",
    "WAVES 280 ML Goblet  (1X6)X12",
    "WODDY BOWL SET SPINREX (1+6)X8 THERMO",
    "WOODY CLASSY (1X6)X12",
    "ZIN/VTL/SG/FSH ASS.F.SET RA THR(1+6)x6",
    "ZINNIA 280 ML Goblet  (1X6)X12",
    "ZINNIA 280 ML Goblet  (B.B) (1X6)X12",
    "ZINNIA BOWL LARGE (B.B) (1X3)X4",
    "ZINNIA BOWL SMALL (B.B) (1X6)X12",
    "ZINNIA CAKE SET (1+6)X6",
    "ZINNIA FRUIT SET (1+6)X6",
    "ZINNIA FRUIT SET (THERMOPORE PACKING) (1+6)X6",
    "ZINNIA Goblet  300 ML (B.B) (1X6X)12",
    "ZINNIA ICE CREAM CUP (1X6)X12",
    "ZINNIA STAR TEA CUP (1X6)X12",
    "ZINNIA STAR TEA CUP (1X6)X16",
    "ZINNIA STAR TEA SET (6+6)X6",
    "ZINNIA TEA CUP (1X6)X16",
    "ZINNIA TEA CUP (B.B) (1X6)X12",
    "ZINNIA TEA SAUCER (B.B) (1X6)X12",
    "ZINNIA TEA SET (6+6)X6",
];

// --- APP STATE AND DOM ELEMENTS ---
const itemList = document.getElementById("itemList");
const quantities = {};

// --- INITIALIZE ITEM QUANTITIES ---
items.forEach(item => {
    quantities[item] = quantities[item] || 0;
});

// --- AUTOMATICALLY UPDATE HEADER TITLE WITH ENTERED NAME ---
window.addEventListener('DOMContentLoaded', () => {
    const partyInput = document.getElementById('partyName') || document.getElementById('partyInput') || document.querySelector('input[type="text"]');
    const headerTitle = document.querySelector('h2') || document.getElementById('headerTitle');

    if (partyInput && headerTitle && headerTitle.innerText.includes("Create Order")) {
        partyInput.addEventListener('input', function() {
            if (partyInput.value.trim() !== "") {
                headerTitle.innerText = partyInput.value;
            } else {
                headerTitle.innerText = "Create Order";
            }
        });
    }
});

// --- TOGGLE SWITCH FUNCTIONALITY ---
function toggleItemQty(item, index, checkbox) {
    if (checkbox.checked) {
        quantities[item] = 1;
    } else {
        quantities[item] = 0;
    }

    const qtySpan = document.getElementById(`item-qty-${index}`);
    if (qtySpan) {
        qtySpan.innerText = quantities[item];
        qtySpan.style.display = quantities[item] > 0 ? 'inline' : 'none';
    }

    updateTotal();
}

// --- LOAD ITEMS INTO THE INVENTORY VIEW ---
function loadItems() {
    if (!itemList) return;
    itemList.innerHTML = "";
    let htmlBuffer = "";

    items.forEach((item, index) => {
        const safeItemName = item.replace(/'/g, "\\'");
        const currentQty = quantities[item] || 0;
        const isChecked = currentQty > 0 ? "checked" : "";

        htmlBuffer += `
        <div class="item">
            <div class="item-name">${item}</div>
            <div class="controls">
                <span class="qty" id="item-qty-${index}" style="${currentQty > 0 ? 'inline' : 'none'};">${currentQty}</span>
                <label class="switch">
                    <input type="checkbox" ${isChecked} onchange="toggleItemQty('${safeItemName}', ${index}, this)">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        `;
    });

    itemList.innerHTML = htmlBuffer;
}

loadItems();

// --- SEARCH ITEMS FUNCTIONALITY (FIXED MULTI-KEYWORD HIGHLIGHT) ---
const searchInput = document.getElementById('search') || document.getElementById('searchItem');
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchVal = this.value.toLowerCase().trim();
        const keywords = searchVal.split(/\s+/).filter(k => k.length > 0);
        const cards = document.querySelectorAll(".item");

        const headerSection = document.querySelector('.container > div:first-child') || document.querySelector('.logo-box') || document.querySelector('header');
        const citySection = document.querySelector('.city-input-container') || document.getElementById('partyName')?.parentElement;

        if (searchVal === "") {
            if (headerSection) headerSection.style.setProperty('display', 'block', 'important');
            if (citySection) citySection.style.setProperty('display', 'block', 'important');
        } else {
            if (headerSection) headerSection.style.setProperty('display', 'none', 'important');
            if (citySection) citySection.style.setProperty('display', 'none', 'important');
        }

        cards.forEach(card => {
            const nameElement = card.querySelector(".item-name");

            if (!card.getAttribute("data-original-name")) {
                card.setAttribute("data-original-name", nameElement.innerText);
            }

            const originalName = card.getAttribute("data-original-name");
            const lowerName = originalName.toLowerCase();

            let isMatch = keywords.every(keyword => lowerName.includes(keyword));

            if (isMatch && searchVal !== "") {
                card.style.setProperty('display', 'flex', 'important');

                // Safe highlight regex
                let regexPattern = keywords.map(k => escapeRegExp(k)).join('|');
                let regex = new RegExp(`(${regexPattern})`, "gi");

                nameElement.innerHTML = originalName.replace(regex, `<span class="search-highlight">$1</span>`);

            } else if (searchVal === "") {
                card.style.setProperty('display', 'flex', 'important');
                nameElement.innerText = originalName;
            } else {
                card.style.setProperty('display', 'none', 'important');
            }
        });
    });
}

// Helper function to safely escape regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// --- TOTAL QUANTITY CALCULATION ---
function updateTotal() {
    let total = 0;
    for (let item in quantities) {
        total += quantities[item];
    }

    if(document.getElementById("totalQty")) {
        document.getElementById("totalQty").innerText = total;
    }
    if(document.getElementById("cartTotalQty")) {
        document.getElementById("cartTotalQty").innerText = total;
    }
}

// --- MODIFY ITEM QUANTITY ---
function changeQty(item, index, value) {
    quantities[item] += value;

    if (quantities[item] < 0) {
        quantities[item] = 0;
    }

    const qtySpan = document.getElementById(`item-qty-${index}`);
    if (qtySpan) {
        qtySpan.innerText = quantities[item];
        qtySpan.style.display = quantities[item] > 0 ? 'inline' : 'none';
    }

    updateTotal();
}

// --- POPUP AND WHATSAPP TRANSMISSION LOGIC ---
const generateOrderBtn = document.getElementById('generateOrderBtn');
const contactsModalOverlay = document.getElementById('contactsModalOverlay');
const btnUmer = document.getElementById('btnUmer');
const btnHassaan = document.getElementById('btnHassaan');
const closeContactsModal = document.getElementById('closeContactsModal');

if (generateOrderBtn) {
    generateOrderBtn.addEventListener('click', function() {
        let totalQty = document.getElementById("cartTotalQty") ? document.getElementById("cartTotalQty").innerText : "0";
        if (parseInt(totalQty) === 0) {
            alert("Your cart is empty! Please add items first.");
            return;
        }

        if (contactsModalOverlay) contactsModalOverlay.style.display = 'flex';
    });
}

if (closeContactsModal) {
    closeContactsModal.addEventListener('click', function() {
        if (contactsModalOverlay) contactsModalOverlay.style.display = 'none';
    });
}

if (contactsModalOverlay) {
    contactsModalOverlay.addEventListener('click', function(e) {
        if (e.target === contactsModalOverlay) {
            contactsModalOverlay.style.display = 'none';
        }
    });
}

// Send Order with Fixed String Value Extraction
function sendOrderToWhatsApp(phoneNumber) {
    let nameSource = "";
    if (typeof userName !== 'undefined') nameSource = userName;
    else if (typeof buyerName !== 'undefined') nameSource = buyerName;
    else if (typeof nameInput !== 'undefined') nameSource = nameInput;

    let generatedByUser = (nameSource && typeof nameSource === 'object' && nameSource.value) ? nameSource.value.trim() : (typeof nameSource === 'string' ? nameSource : "User");
    if (!generatedByUser) generatedByUser = "User";

    let message = "____________________\n";
    message += "Selected Items:\n";

    const cartRows = document.querySelectorAll('.cart-dynamic-item-row');
    let dynamicTotal = 0;
    let databaseItems = [];

    if (cartRows.length > 0) {
        cartRows.forEach((row, index) => {
            const itemName = row.querySelector('.cart-dynamic-name-input').value.trim();
            const itemQty = parseInt(row.querySelector('.cart-dynamic-qty-input').value) || 0;
            if (itemQty > 0) {
                message += `${index + 1}. ${itemName} → (Qty: ${itemQty})\n`;
                dynamicTotal += itemQty;
                databaseItems.push({ name: itemName, qty: itemQty });
            }
        });
    } else {
        let index = 1;
        for (let item in quantities) {
            if (quantities[item] > 0) {
                message += `${index}. ` + item + " → (Qty: " + quantities[item] + ")\n";
                dynamicTotal += quantities[item];
                databaseItems.push({ name: item, qty: quantities[item] });
                index++;
            }
        }
    }

    message += "Total Quantity: " + dynamicTotal + "\n";
    message += "Generated by: " + generatedByUser + "\n"; 
    message += "_________________________\n";

    const databasePayload = {
        totalQty: dynamicTotal,
        items: databaseItems,
        generatedBy: generatedByUser,
        timestamp: new Date().toISOString()
    };

    if (typeof database !== 'undefined' && database.ref) {
        const ordersRef = database.ref('orders');
        const newOrderRef = ordersRef.push();
        newOrderRef.set(databasePayload)
        .then(() => {
            window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message), "_blank");
        })
        .catch((error) => {
            window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message), "_blank");
        });
    } else {
        window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message), "_blank");
    }

    if (contactsModalOverlay) contactsModalOverlay.style.display = 'none';
}

if (btnUmer) {
    btnUmer.addEventListener('click', function() {
        sendOrderToWhatsApp('923234669795');
    });
}

if (btnHassaan) {
    btnHassaan.addEventListener('click', function() {
        sendOrderToWhatsApp('923214950399');
    });
}
