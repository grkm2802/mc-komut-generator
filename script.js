// Language translations
const translations = {
    tr: {
        ui: {
            headerTitle: '⚔️ Minecraft Komut Oluşturucu',
            headerSubtitle: 'Eşya komutlarını kolayca oluşturun',
            itemSelectLabel: 'Eşya Seçin',
            quantityInputLabel: 'Miktar',
            targetSelectLabel: 'Hedef (Oyuncu)',
            targetPlaceholder: 'Oyuncu İsmi',
            unbreakableLabel: 'Kırılmaz (Unbreakable)',
            searchPlaceholder: '🔍 Ara...',
            customNameLabel: 'Eşya İsmi',
            customNamePlaceholder: 'Örn: Ejderha Kılıcı',
            nameColorLabel: 'Renk',
            boldLabel: 'Kalın',
            italicLabel: 'İtalik',
            loreLabel: 'Açıklama (Lore)',
            lorePlaceholder: 'Her satır yeni bir açıklama satırı olur...',
            presetsTitle: 'Kaydedilenler (Presets)',
            presetPlaceholder: 'Preset İsmi...',
            saveBtn: 'Kaydet',
            loadBtn: 'Yükle',
            deleteBtn: 'Sil',
            selectPresetPlaceholder: 'Bir kayıt seçin...',
            enchantmentsLabel: 'Büyüler (Enchantments)',
            addEnchantBtn: '+ Büyü Ekle',
            silentModeText: '🔇 Sessiz Mod',
            silentModeHint: 'Komut chat\'te görünmeyecek',
            outputTitle: 'Oluşturulan Komut',
            copyBtn: '📋 Kopyala',
            commandPlaceholder: 'Komut burada görünecek...',
            selectItemPlaceholder: 'Bir eşya seçin...',
            selectEnchantPlaceholder: 'Büyü seçin...',
            enchantLevelPlaceholder: 'Seviye',
            maxLevelInfo: 'Maksimum Seviye:',
            copied: '✓ Kopyalandı!',
            copyError: 'Komut kopyalanamadı. Lütfen manuel olarak kopyalayın.',
            opItemsBtn: '⚡ OP Eşyalar (Master Set)',
            opItemsTitle: '⚡ En Güçlü Eşya Seti',
            copyCommand: 'Kopyala',
            commandDescription: 'Açıklama:',
            displaySettingsTitle: 'Görünüm Ayarları',
            versionSelectLabel: 'Oyun Sürümü',
            versionOld: '1.20.4 ve Altı',
            versionNew: '1.20.5 ve Üstü'
        },
        content: {
            contentTitle: 'Minecraft Komut Oluşturucu Nedir?',
            contentDesc: 'Bu araç, Minecraft oyuncularının karmaşık <strong>/give</strong> komutlarını saniyeler içinde oluşturmasını sağlar. Artık komut blokları veya sohbet penceresinde uzun kodlar yazmakla uğraşmanıza gerek yok. İster <strong>1.21</strong> sürümü için netherite kılıç yapın, ister <strong>1.8</strong> için elmas setler; MC AI Komut Oluşturucu tüm ihtiyaçlarınıza cevap verir.',
            featuresTitle: 'Özellikler',
            feature1: '✨ <strong>Özel İsimlendirme ve Lore:</strong> Eşyalarınıza renkli isimler ve açıklamalar ekleyin.',
            feature2: '🔥 <strong>Sınırsız Büyüleme:</strong> Keskinlik 1000, Verimlilik 32767 gibi vanilla sınırlarının ötesine geçin.',
            feature3: '🛡️ <strong>Kırılmazlık:</strong> Asla kırılmayan "Unbreakable" eşyalar yapın.',
            feature4: '⚡ <strong>OP Eşya Setleri:</strong> Hazır "Master Set" ile tek tıkla en güçlü eşyalara sahip olun.',
            feature5: '🌍 <strong>Çoklu Dil Desteği:</strong> Türkçe, İngilizce, Almanca ve 10+ dilde kullanın.',
            guideTitle: 'Minecraft\'ta Nasıl OP Kılıç Yapılır?',
            guideStep1: '1. <strong>Eşya Seçin:</strong> Listeden "Elmas Kılıç" veya "Netherite Kılıç" seçin.',
            guideStep2: '2. <strong>Büyü Ekleyin:</strong> "Keskinlik" (Sharpness) seçin ve seviyeyi 255 (veya daha yüksek) yapın.',
            guideStep3: '3. <strong>Kırılmaz Yapın:</strong> "Kırılmaz" kutucuğunu işaretleyin.',
            guideStep4: '4. <strong>Kopyalayın:</strong> Oluşturulan komutu kopyalayın ve oyunda komut bloğuna yapıştırın.'
        },
        itemGroups: {
            weapons: 'Silahlar',
            tools: 'Aletler',
            armor: 'Zırh',
            special: 'Özel Eşyalar'
        },
        items: {
            diamond_sword: 'Elmas Kılıç',
            iron_sword: 'Demir Kılıç',
            golden_sword: 'Altın Kılıç',
            stone_sword: 'Taş Kılıç',
            wooden_sword: 'Ahşap Kılıç',
            bow: 'Yay',
            crossbow: 'Arbalet',
            trident: 'Mızrak',
            diamond_pickaxe: 'Elmas Kazma',
            iron_pickaxe: 'Demir Kazma',
            diamond_axe: 'Elmas Balta',
            diamond_shovel: 'Elmas Kürek',
            diamond_hoe: 'Elmas Çapa',
            diamond_helmet: 'Elmas Kask',
            diamond_chestplate: 'Elmas Göğüslük',
            diamond_leggings: 'Elmas Pantolon',
            diamond_boots: 'Elmas Bot',
            golden_apple: 'Altın Elma',
            enchanted_golden_apple: 'Büyülü Altın Elma',
            ender_pearl: 'Ender İncisi',
            diamond: 'Elmas',
            emerald: 'Zümrüt',
            netherite_ingot: 'Netherite Külçesi'
        },
        enchantments: {
            sharpness: 'Keskinlik',
            smite: 'Öldürücü Darbe',
            bane_of_arthropods: 'Böcek Öldürücü',
            knockback: 'Geri Tepme',
            fire_aspect: 'Ateş Dokunuşu',
            looting: 'Ganimet',
            sweeping_edge: 'Süpürme Kenarı',
            unbreaking: 'Dayanıklılık',
            mending: 'Onarım',
            efficiency: 'Verimlilik',
            silk_touch: 'İpek Dokunuşu',
            fortune: 'Servet',
            power: 'Güç',
            punch: 'Yumruk',
            flame: 'Alev',
            infinity: 'Sonsuzluk',
            protection: 'Koruma',
            fire_protection: 'Ateş Koruması',
            feather_falling: 'Tüy Düşüşü',
            blast_protection: 'Patlama Koruması',
            projectile_protection: 'Mermi Koruması',
            respiration: 'Nefes Alma',
            aqua_affinity: 'Su Uyumu',
            thorns: 'Dikenler',
            depth_strider: 'Derinlik Yürüyüşü',
            frost_walker: 'Don Yürüyüşü',
            soul_speed: 'Ruh Hızı',
            swift_sneak: 'Hızlı Sinsilik',
            loyalty: 'Sadakat',
            impaling: 'Saplama',
            riptide: 'Girdap',
            channeling: 'Kanalizasyon',
            multishot: 'Çoklu Atış',
            quick_charge: 'Hızlı Şarj',
            piercing: 'Delme'
        },
        targets: {
            s: '@s (Kendisi)',
            p: '@p (En Yakın)',
            a: '@a (Herkes)',
            e: '@e (Tüm Varlıklar)',
            r: '@r (Rastgele)',
            custom: 'Özel İsim...'
        },
        colors: {
            default: 'Varsayılan',
            white: 'Beyaz',
            red: 'Kırmızı',
            dark_red: 'Koyu Kırmızı',
            gold: 'Altın',
            green: 'Yeşil',
            dark_green: 'Koyu Yeşil',
            aqua: 'Açık Mavi',
            dark_aqua: 'Koyu Mavi',
            blue: 'Mavi',
            dark_blue: 'Lacivert',
            light_purple: 'Pembe',
            dark_purple: 'Mor',
            yellow: 'Sarı',
            gray: 'Gri',
            dark_gray: 'Koyu Gri',
            black: 'Siyah'
        }
    },
    en: {
        ui: {
            headerTitle: '⚔️ Minecraft Command Generator',
            headerSubtitle: 'Easily create item commands',
            itemSelectLabel: 'Select Item',
            quantityInputLabel: 'Quantity',
            targetSelectLabel: 'Target',
            targetPlaceholder: 'Player Name',
            unbreakableLabel: 'Unbreakable',
            searchPlaceholder: '🔍 Search...',
            customNameLabel: 'Item Name',
            customNamePlaceholder: 'Ex: Dragon Slayer',
            loreLabel: 'Lore (Description)',
            lorePlaceholder: 'Each line is a new lore line...',
            enchantmentsLabel: 'Enchantments',
            addEnchantBtn: '+ Add Enchantment',
            silentModeText: '🔇 Silent Mode',
            silentModeHint: 'Command won\'t appear in chat',
            outputTitle: 'Generated Command',
            copyBtn: '📋 Copy',
            commandPlaceholder: 'Command will appear here...',
            selectItemPlaceholder: 'Select an item...',
            selectEnchantPlaceholder: 'Select enchantment...',
            enchantLevelPlaceholder: 'Level',
            maxLevelInfo: 'Max Level:',
            copied: '✓ Copied!',
            copyError: 'Failed to copy command. Please copy manually.',
            opItemsBtn: '⚡ OP Items (Master Set)',
            opItemsTitle: '⚡ Ultimate Item Set',
            copyCommand: 'Copy',
            commandDescription: 'Description:',
            displaySettingsTitle: 'Display Settings',
            versionSelectLabel: 'Game Version',
            versionOld: '1.20.4 and Below',
            versionNew: '1.20.5 and Above'
        },
        content: {
            contentTitle: 'What is Minecraft Command Generator?',
            contentDesc: 'This tool allows Minecraft players to generate complex <strong>/give</strong> commands in seconds. No need to struggle with long codes in command blocks or chat. Whether you are making a netherite sword for version <strong>1.21</strong> or diamond sets for <strong>1.8</strong>; MC AI Command Generator answers all your needs.',
            featuresTitle: 'Features',
            feature1: '✨ <strong>Custom Naming and Lore:</strong> Add colorful names and descriptions to your items.',
            feature2: '🔥 <strong>Unlimited Enchantments:</strong> Go beyond vanilla limits like Sharpness 1000, Efficiency 32767.',
            feature3: '🛡️ <strong>Unbreakable:</strong> Make "Unbreakable" items that never break.',
            feature4: '⚡ <strong>OP Item Sets:</strong> Get the strongest items with a single click using "Master Set".',
            feature5: '🌍 <strong>Multi-Language Support:</strong> Use in Turkish, English, German, and 10+ languages.',
            guideTitle: 'How to Make an OP Sword in Minecraft?',
            guideStep1: '1. <strong>Select Item:</strong> Choose "Diamond Sword" or "Netherite Sword" from the list.',
            guideStep2: '2. <strong>Add Enchantment:</strong> Select "Sharpness" and set the level to 255 (or higher).',
            guideStep3: '3. <strong>Make Unbreakable:</strong> Check the "Unbreakable" box.',
            guideStep4: '4. <strong>Copy:</strong> Copy the generated command and paste it into a command block in the game.'
        },
        itemGroups: {
            weapons: 'Weapons',
            tools: 'Tools',
            armor: 'Armor',
            special: 'Special Items'
        },
        items: {
            diamond_sword: 'Diamond Sword',
            iron_sword: 'Iron Sword',
            golden_sword: 'Golden Sword',
            stone_sword: 'Stone Sword',
            wooden_sword: 'Wooden Sword',
            bow: 'Bow',
            crossbow: 'Crossbow',
            trident: 'Trident',
            diamond_pickaxe: 'Diamond Pickaxe',
            iron_pickaxe: 'Iron Pickaxe',
            diamond_axe: 'Diamond Axe',
            diamond_shovel: 'Diamond Shovel',
            diamond_hoe: 'Diamond Hoe',
            diamond_helmet: 'Diamond Helmet',
            diamond_chestplate: 'Diamond Chestplate',
            diamond_leggings: 'Diamond Leggings',
            diamond_boots: 'Diamond Boots',
            golden_apple: 'Golden Apple',
            enchanted_golden_apple: 'Enchanted Golden Apple',
            ender_pearl: 'Ender Pearl',
            diamond: 'Diamond',
            emerald: 'Emerald',
            netherite_ingot: 'Netherite Ingot'
        },
        enchantments: {
            sharpness: 'Sharpness',
            smite: 'Smite',
            bane_of_arthropods: 'Bane of Arthropods',
            knockback: 'Knockback',
            fire_aspect: 'Fire Aspect',
            looting: 'Looting',
            sweeping_edge: 'Sweeping Edge',
            unbreaking: 'Unbreaking',
            mending: 'Mending',
            efficiency: 'Efficiency',
            silk_touch: 'Silk Touch',
            fortune: 'Fortune',
            power: 'Power',
            punch: 'Punch',
            flame: 'Flame',
            infinity: 'Infinity',
            protection: 'Protection',
            fire_protection: 'Fire Protection',
            feather_falling: 'Feather Falling',
            blast_protection: 'Blast Protection',
            projectile_protection: 'Projectile Protection',
            respiration: 'Respiration',
            aqua_affinity: 'Aqua Affinity',
            thorns: 'Thorns',
            depth_strider: 'Depth Strider',
            frost_walker: 'Frost Walker',
            soul_speed: 'Soul Speed',
            swift_sneak: 'Swift Sneak',
            loyalty: 'Loyalty',
            impaling: 'Impaling',
            riptide: 'Riptide',
            channeling: 'Channeling',
            multishot: 'Multishot',
            quick_charge: 'Quick Charge',
            piercing: 'Piercing'
        },
        targets: {
            s: '@s (Self)',
            p: '@p (Nearest)',
            a: '@a (All Players)',
            e: '@e (All Entities)',
            r: '@r (Random)',
            custom: 'Custom Name...'
        },
        colors: {
            default: 'Default',
            white: 'White',
            red: 'Red',
            dark_red: 'Dark Red',
            gold: 'Gold',
            green: 'Green',
            dark_green: 'Dark Green',
            aqua: 'Aqua',
            dark_aqua: 'Dark Aqua',
            blue: 'Blue',
            dark_blue: 'Dark Blue',
            light_purple: 'Light Purple',
            dark_purple: 'Dark Purple',
            yellow: 'Yellow',
            gray: 'Gray',
            dark_gray: 'Dark Gray',
            black: 'Black'
        }
    },
    de: {
        ui: {
            headerTitle: '⚔️ Minecraft Befehlsgenerator',
            headerSubtitle: 'Erstelle einfach Item-Befehle',
            itemSelectLabel: 'Item Auswählen',
            quantityInputLabel: 'Menge',
            enchantmentsLabel: 'Verzauberungen',
            addEnchantBtn: '+ Verzauberung',
            silentModeText: '🔇 Stiller Modus',
            silentModeHint: 'Befehl erscheint nicht im Chat',
            outputTitle: 'Generierter Befehl',
            copyBtn: '📋 Kopieren',
            commandPlaceholder: 'Befehl erscheint hier...',
            selectItemPlaceholder: 'Wähle ein Item...',
            selectEnchantPlaceholder: 'Wähle Verzauberung...',
            enchantLevelPlaceholder: 'Stufe',
            maxLevelInfo: 'Max Stufe:',
            copied: '✓ Kopiert!',
            copyError: 'Kopieren fehlgeschlagen.',
            opItemsBtn: '⚡ OP Items (Master Set)',
            opItemsTitle: '⚡ Ultimatives Item Set',
            copyCommand: 'Kopieren',
            commandDescription: 'Beschreibung:',
            versionSelectLabel: 'Spielversion',
            versionOld: '1.20.4 und darunter',
            versionNew: '1.20.5 und höher',
            displaySettingsTitle: 'Anzeigeeinstellungen',
            customNameLabel: 'Gegenstandsname',
            customNamePlaceholder: 'Bsp: Drachentöter',
            boldLabel: 'Fett',
            italicLabel: 'Kursiv',
            loreLabel: 'Lore (Beschreibung)',
            lorePlaceholder: 'Beschreibungstext...',
            presetsTitle: 'Voreinstellungen',
            presetPlaceholder: 'Voreinstellungsname...',
            saveBtn: 'Speichern',
            loadBtn: 'Laden',
            deleteBtn: 'Löschen',
            targetSelectLabel: 'Ziel',
            targetPlaceholder: 'Spielername',
            unbreakableLabel: 'Unzerstörbar',
            searchPlaceholder: '🔍 Suchen...',
            selectPresetPlaceholder: 'Voreinstellung wählen...'
        },
        content: {
            contentTitle: 'Was ist der Minecraft Befehlsgenerator?',
            contentDesc: 'Dieses Tool ermöglicht es Minecraft-Spielern, komplexe <strong>/give</strong>-Befehle in Sekunden zu erstellen. Kein Kampf mehr mit langen Codes in Befehlsblöcken oder im Chat. Ob Netherite-Schwert für Version <strong>1.21</strong> oder Diamant-Sets für <strong>1.8</strong>; MC AI Befehlsgenerator erfüllt alle Bedürfnisse.',
            featuresTitle: 'Funktionen',
            feature1: '✨ <strong>Benutzerdefinierte Namen und Lore:</strong> Füge deinen Gegenständen farbige Namen und Beschreibungen hinzu.',
            feature2: '🔥 <strong>Unbegrenzte Verzauberungen:</strong> Gehe über Vanilla-Grenzen hinaus wie Schärfe 1000, Effizienz 32767.',
            feature3: '🛡️ <strong>Unzerstörbar:</strong> Erstelle "Unzerstörbare" Gegenstände, die niemals kaputtgehen.',
            feature4: '⚡ <strong>OP Item Sets:</strong> Erhalte die stärksten Gegenstände mit einem Klick durch "Master Set".',
            feature5: '🌍 <strong>Mehrsprachiger Support:</strong> Nutze es auf Türkisch, Englisch, Deutsch und 10+ Sprachen.',
            guideTitle: 'Wie macht man ein OP-Schwert in Minecraft?',
            guideStep1: '1. <strong>Item Wählen:</strong> Wähle "Diamantschwert" oder "Netherite-Schwert" aus der Liste.',
            guideStep2: '2. <strong>Verzauberung Hinzufügen:</strong> Wähle "Schärfe" und setze das Level auf 255 (oder höher).',
            guideStep3: '3. <strong>Unzerstörbar Machen:</strong> Aktiviere das "Unzerstörbar"-Kästchen.',
            guideStep4: '4. <strong>Kopieren:</strong> Kopiere den generierten Befehl und füge ihn im Spiel in einen Befehlsblock ein.'
        },
        targets: {
            s: '@s (Selbst)',
            p: '@p (Nächster)',
            a: '@a (Alle)',
            e: '@e (Entitäten)',
            r: '@r (Zufällig)',
            custom: 'Benutzerdefiniert...'
        },
        colors: {
            default: 'Standard',
            white: 'Weiß',
            red: 'Rot',
            dark_red: 'Dunkelrot',
            gold: 'Gold',
            green: 'Grün',
            dark_green: 'Dunkelgrün',
            aqua: 'Türkis',
            dark_aqua: 'Dunkeltürkis',
            blue: 'Blau',
            dark_blue: 'Dunkelblau',
            light_purple: 'Hellviolett',
            dark_purple: 'Dunkelviolett',
            yellow: 'Gelb',
            gray: 'Grau',
            dark_gray: 'Dunkelgrau',
            black: 'Schwarz'
        },
        itemGroups: {
            weapons: 'Waffen',
            tools: 'Werkzeuge',
            armor: 'Rüstung',
            special: 'Spezial Items'
        },
        items: {
            diamond_sword: 'Diamantschwert',
            iron_sword: 'Eisenschwert',
            golden_sword: 'Goldschwert',
            stone_sword: 'Steinschwert',
            wooden_sword: 'Holzschwert',
            bow: 'Bogen',
            crossbow: 'Armbrust',
            trident: 'Dreizack',
            diamond_pickaxe: 'Diamantspitzhacke',
            iron_pickaxe: 'Eisenspitzhacke',
            diamond_axe: 'Diamantaxt',
            diamond_shovel: 'Diamantschaufel',
            diamond_hoe: 'Diamanthacke',
            diamond_helmet: 'Diamanthelm',
            diamond_chestplate: 'Diamantharnisch',
            diamond_leggings: 'Diamantbeinschutz',
            diamond_boots: 'Diamantstiefel',
            golden_apple: 'Goldener Apfel',
            enchanted_golden_apple: 'Verzauberter Goldener Apfel',
            ender_pearl: 'Enderperle',
            diamond: 'Diamant',
            emerald: 'Smaragd',
            netherite_ingot: 'Netheritbarren'
        },
        enchantments: {
            sharpness: 'Schärfe',
            smite: 'Bann',
            bane_of_arthropods: 'Nemesis der Gliederfüßer',
            knockback: 'Rückstoß',
            fire_aspect: 'Verbrennung',
            looting: 'Plünderung',
            sweeping_edge: 'Schwungkraft',
            unbreaking: 'Haltbarkeit',
            mending: 'Reparatur',
            efficiency: 'Effizienz',
            silk_touch: 'Behutsamkeit',
            fortune: 'Glück',
            power: 'Stärke',
            punch: 'Schlag',
            flame: 'Flamme',
            infinity: 'Unendlichkeit',
            protection: 'Schutz',
            fire_protection: 'Feuerschutz',
            feather_falling: 'Federfall',
            blast_protection: 'Explosionsschutz',
            projectile_protection: 'Schusssicher',
            respiration: 'Atmung',
            aqua_affinity: 'Wasseraffinität',
            thorns: 'Dornen',
            depth_strider: 'Wasserläufer',
            frost_walker: 'Eisläufer',
            soul_speed: 'Seelenläufer',
            swift_sneak: 'Schnelles Schleichen',
            loyalty: 'Treue',
            impaling: 'Harpune',
            riptide: 'Sog',
            channeling: 'Entladung',
            multishot: 'Mehrfachschuss',
            quick_charge: 'Schnellladen',
            piercing: 'Durchschuss'
        }
    },
    es: {
        ui: {
            headerTitle: '⚔️ Generador de Comandos Minecraft',
            headerSubtitle: 'Crea comandos de items fácilmente',
            itemSelectLabel: 'Seleccionar Item',
            quantityInputLabel: 'Cantidad',
            enchantmentsLabel: 'Encantamientos',
            addEnchantBtn: '+ Añadir Encantamiento',
            silentModeText: '🔇 Modo Silencioso',
            silentModeHint: 'El comando no aparecerá en el chat',
            outputTitle: 'Comando Generado',
            copyBtn: '📋 Copiar',
            commandPlaceholder: 'El comando aparecerá aquí...',
            selectItemPlaceholder: 'Selecciona un item...',
            selectEnchantPlaceholder: 'Selecciona encantamiento...',
            enchantLevelPlaceholder: 'Nivel',
            maxLevelInfo: 'Nivel Max:',
            copied: '✓ Copiado!',
            copyError: 'Error al copiar.',
            opItemsBtn: '⚡ Items OP (Set Maestro)',
            opItemsTitle: '⚡ Set de Items Definitivo',
            copyCommand: 'Copiar',
            commandDescription: 'Descripción:',
            versionSelectLabel: 'Versión del Juego',
            versionOld: '1.20.4 y inferior',
            versionNew: '1.20.5 y superior',
            displaySettingsTitle: 'Configuración de Pantalla',
            customNameLabel: 'Nombre del Objeto',
            customNamePlaceholder: 'Ej: Matadragones',
            boldLabel: 'Negrita',
            italicLabel: 'Cursiva',
            loreLabel: 'Lore (Descripción)',
            lorePlaceholder: 'Líneas de lore...',
            presetsTitle: 'Preajustes',
            presetPlaceholder: 'Nombre del Preajuste...',
            saveBtn: 'Guardar',
            loadBtn: 'Cargar',
            deleteBtn: 'Eliminar',
            targetSelectLabel: 'Objetivo',
            targetPlaceholder: 'Nombre del Jugador',
            unbreakableLabel: 'Indestructible',
            searchPlaceholder: '🔍 Buscar...',
            selectPresetPlaceholder: 'Seleccionar preajuste...'
        },
        content: {
            contentTitle: '¿Qué es el Generador de Comandos de Minecraft?',
            contentDesc: 'Esta herramienta permite a los jugadores de Minecraft generar comandos complejos <strong>/give</strong> en segundos. No más luchar con códigos largos en bloques de comandos o chat. Ya sea una espada de netherite para la versión <strong>1.21</strong> o sets de diamante para <strong>1.8</strong>; MC AI Command Generator responde a todas tus necesidades.',
            featuresTitle: 'Características',
            feature1: '✨ <strong>Nombres y Lore Personalizados:</strong> Añade nombres coloridos y descripciones a tus objetos.',
            feature2: '🔥 <strong>Encantamientos Ilimitados:</strong> Ve más allá de los límites vanilla como Filo 1000, Eficiencia 32767.',
            feature3: '🛡️ <strong>Indestructible:</strong> Crea objetos "Indestructibles" que nunca se rompen.',
            feature4: '⚡ <strong>Sets de Objetos OP:</strong> Obtén los objetos más fuertes con un solo clic usando "Set Maestro".',
            feature5: '🌍 <strong>Soporte Multi-Lenguaje:</strong> Úsalo en Turco, Inglés, Alemán y más de 10 idiomas.',
            guideTitle: '¿Cómo hacer una Espada OP en Minecraft?',
            guideStep1: '1. <strong>Seleccionar Objeto:</strong> Elige "Espada de Diamante" o "Espada de Netherite" de la lista.',
            guideStep2: '2. <strong>Añadir Encantamiento:</strong> Selecciona "Filo" (Sharpness) y establece el nivel en 255 (o más).',
            guideStep3: '3. <strong>Hacer Indestructible:</strong> Marca la casilla "Indestructible".',
            guideStep4: '4. <strong>Copiar:</strong> Copia el comando generado y pégalo en un bloque de comandos en el juego.'
        },
        targets: {
            s: '@s (Sí mismo)',
            p: '@p (Más cercano)',
            a: '@a (Todos)',
            e: '@e (Entidades)',
            r: '@r (Aleatorio)',
            custom: 'Personalizado...'
        },
        colors: {
            default: 'Por defecto',
            white: 'Blanco',
            red: 'Rojo',
            dark_red: 'Rojo Oscuro',
            gold: 'Oro',
            green: 'Verde',
            dark_green: 'Verde Oscuro',
            aqua: 'Agua',
            dark_aqua: 'Agua Oscuro',
            blue: 'Azul',
            dark_blue: 'Azul Oscuro',
            light_purple: 'Morado Claro',
            dark_purple: 'Morado',
            yellow: 'Amarillo',
            gray: 'Gris',
            dark_gray: 'Gris Oscuro',
            black: 'Negro'
        },
        itemGroups: {
            weapons: 'Armas',
            tools: 'Herramientas',
            armor: 'Armadura',
            special: 'Items Especiales'
        },
        items: {
            diamond_sword: 'Espada de Diamante',
            iron_sword: 'Espada de Hierro',
            golden_sword: 'Espada de Oro',
            stone_sword: 'Espada de Piedra',
            wooden_sword: 'Espada de Madera',
            bow: 'Arco',
            crossbow: 'Ballesta',
            trident: 'Tridente',
            diamond_pickaxe: 'Pico de Diamante',
            iron_pickaxe: 'Pico de Hierro',
            diamond_axe: 'Hacha de Diamante',
            diamond_shovel: 'Pala de Diamante',
            diamond_hoe: 'Azada de Diamante',
            diamond_helmet: 'Casco de Diamante',
            diamond_chestplate: 'Peto de Diamante',
            diamond_leggings: 'Grebas de Diamante',
            diamond_boots: 'Botas de Diamante',
            golden_apple: 'Manzana de Oro',
            enchanted_golden_apple: 'Manzana de Oro Encantada',
            ender_pearl: 'Perla de Ender',
            diamond: 'Diamante',
            emerald: 'Esmeralda',
            netherite_ingot: 'Lingote de Netherita'
        },
        enchantments: {
            sharpness: 'Filo',
            smite: 'Golpeo',
            bane_of_arthropods: 'Perdición de los Artrópodos',
            knockback: 'Empuje',
            fire_aspect: 'Aspecto Ígneo',
            looting: 'Botín',
            sweeping_edge: 'Filo Arrasador',
            unbreaking: 'Irrompibilidad',
            mending: 'Reparación',
            efficiency: 'Eficiencia',
            silk_touch: 'Toque de Seda',
            fortune: 'Fortuna',
            power: 'Poder',
            punch: 'Retroceso',
            flame: 'Fuego',
            infinity: 'Infinidad',
            protection: 'Protección',
            fire_protection: 'Protección contra el fuego',
            feather_falling: 'Caída de Pluma',
            blast_protection: 'Protección contra explosiones',
            projectile_protection: 'Protección contra proyectiles',
            respiration: 'Respiración',
            aqua_affinity: 'Afinidad Acuática',
            thorns: 'Espinas',
            depth_strider: 'Agilidad Acuática',
            frost_walker: 'Paso Helado',
            soul_speed: 'Velocidad de Almas',
            swift_sneak: 'Sigilo Rápido',
            loyalty: 'Lealtad',
            impaling: 'Empalamiento',
            riptide: 'Propulsión Acuática',
            channeling: 'Conductividad',
            multishot: 'Multidisparo',
            quick_charge: 'Carga Rápida',
            piercing: 'Perforación'
        }
    },
    fr: {
        ui: {
            headerTitle: '⚔️ Générateur de Commandes Minecraft',
            headerSubtitle: 'Créez facilement des commandes d\'objets',
            itemSelectLabel: 'Choisir un Objet',
            quantityInputLabel: 'Quantité',
            enchantmentsLabel: 'Enchantements',
            addEnchantBtn: '+ Ajouter Enchantement',
            silentModeText: '🔇 Mode Silencieux',
            silentModeHint: 'La commande n\'apparaîtra pas dans le chat',
            outputTitle: 'Commande Générée',
            copyBtn: '📋 Copier',
            commandPlaceholder: 'La commande apparaîtra ici...',
            selectItemPlaceholder: 'Sélectionnez un objet...',
            selectEnchantPlaceholder: 'Choisir l\'enchantement...',
            enchantLevelPlaceholder: 'Niveau',
            maxLevelInfo: 'Niveau Max:',
            copied: '✓ Copié!',
            copyError: 'Échec de la copie.',
            opItemsBtn: '⚡ Objets OP (Set Maître)',
            opItemsTitle: '⚡ Set d\'Objets Ultime',
            copyCommand: 'Copier',
            commandDescription: 'Description:',
            versionSelectLabel: 'Version du Jeu',
            versionOld: '1.20.4 et inférieur',
            versionNew: '1.20.5 et supérieur',
            displaySettingsTitle: 'Paramètres d\'Affichage',
            customNameLabel: 'Nom de l\'Objet',
            customNamePlaceholder: 'Ex: Tueur de Dragons',
            boldLabel: 'Gras',
            italicLabel: 'Italique',
            loreLabel: 'Lore (Description)',
            lorePlaceholder: 'Lignes de description...',
            presetsTitle: 'Préréglages',
            presetPlaceholder: 'Nom du Préréglage...',
            saveBtn: 'Sauvegarder',
            loadBtn: 'Charger',
            deleteBtn: 'Supprimer',
            targetSelectLabel: 'Cible',
            targetPlaceholder: 'Nom du Joueur',
            unbreakableLabel: 'Indestructible',
            searchPlaceholder: '🔍 Rechercher...',
            selectPresetPlaceholder: 'Sélectionner un préréglage...'
        },
        content: {
            contentTitle: 'Qu\'est-ce que le Générateur de Commandes Minecraft ?',
            contentDesc: 'Cet outil permet aux joueurs de Minecraft de générer des commandes <strong>/give</strong> complexes en quelques secondes. Plus besoin de lutter avec de longs codes dans les blocs de commande ou le chat. Que ce soit une épée en netherite pour la version <strong>1.21</strong> ou des sets en diamant pour la <strong>1.8</strong>; MC AI Command Generator répond à tous vos besoins.',
            featuresTitle: 'Fonctionnalités',
            feature1: '✨ <strong>Nom et Lore Personnalisés:</strong> Ajoutez des noms colorés et des descriptions à vos objets.',
            feature2: '🔥 <strong>Enchantements Illimités:</strong> Dépassez les limites vanilla comme Tranchant 1000, Efficacité 32767.',
            feature3: '🛡️ <strong>Indestructible:</strong> Créez des objets "Indestructibles" qui ne se cassent jamais.',
            feature4: '⚡ <strong>Sets d\'Objets OP:</strong> Obtenez les objets les plus puissants en un clic avec "Set Maître".',
            feature5: '🌍 <strong>Support Multi-Langue:</strong> Utilisez en Turc, Anglais, Allemand et plus de 10 langues.',
            guideTitle: 'Comment faire une Épée OP dans Minecraft ?',
            guideStep1: '1. <strong>Choisir l\'Objet:</strong> Sélectionnez "Épée en Diamant" ou "Épée en Netherite" dans la liste.',
            guideStep2: '2. <strong>Ajouter Enchantement:</strong> Sélectionnez "Tranchant" (Sharpness) et réglez le niveau à 255 (ou plus).',
            guideStep3: '3. <strong>Rendre Indestructible:</strong> Cochez la case "Indestructible".',
            guideStep4: '4. <strong>Copier:</strong> Copiez la commande générée et collez-la dans un bloc de commande en jeu.'
        },
        targets: {
            s: '@s (Soi-même)',
            p: '@p (Le plus proche)',
            a: '@a (Tous)',
            e: '@e (Entités)',
            r: '@r (Aléatoire)',
            custom: 'Personnalisé...'
        },
        colors: {
            default: 'Par défaut',
            white: 'Blanc',
            red: 'Rouge',
            dark_red: 'Rouge Foncé',
            gold: 'Or',
            green: 'Vert',
            dark_green: 'Vert Foncé',
            aqua: 'Aqua',
            dark_aqua: 'Aqua Foncé',
            blue: 'Bleu',
            dark_blue: 'Bleu Foncé',
            light_purple: 'Violet Clair',
            dark_purple: 'Violet',
            yellow: 'Jaune',
            gray: 'Gris',
            dark_gray: 'Gris Foncé',
            black: 'Noir'
        },
        itemGroups: {
            weapons: 'Armes',
            tools: 'Outils',
            armor: 'Armure',
            special: 'Objets Spéciaux'
        },
        items: {
            diamond_sword: 'Épée en Diamant',
            iron_sword: 'Épée en Fer',
            golden_sword: 'Épée en Or',
            stone_sword: 'Épée en Pierre',
            wooden_sword: 'Épée en Bois',
            bow: 'Arc',
            crossbow: 'Arbalète',
            trident: 'Trident',
            diamond_pickaxe: 'Pioche en Diamant',
            iron_pickaxe: 'Pioche en Fer',
            diamond_axe: 'Hache en Diamant',
            diamond_shovel: 'Pelle en Diamant',
            diamond_hoe: 'Houe en Diamant',
            diamond_helmet: 'Casque en Diamant',
            diamond_chestplate: 'Plastron en Diamant',
            diamond_leggings: 'Jambières en Diamant',
            diamond_boots: 'Bottes en Diamant',
            golden_apple: 'Pomme Dorée',
            enchanted_golden_apple: 'Pomme Dorée Enchantée',
            ender_pearl: 'Perle de l\'Ender',
            diamond: 'Diamant',
            emerald: 'Émeraude',
            netherite_ingot: 'Lingot de Netherite'
        },
        enchantments: {
            sharpness: 'Tranchant',
            smite: 'Châtiment',
            bane_of_arthropods: 'Fléau des Arthropodes',
            knockback: 'Recul',
            fire_aspect: 'Aura de Feu',
            looting: 'Butin',
            sweeping_edge: 'Affilage',
            unbreaking: 'Solidité',
            mending: 'Raccommodage',
            efficiency: 'Efficacité',
            silk_touch: 'Toucher de Soie',
            fortune: 'Fortune',
            power: 'Puissance',
            punch: 'Frappe',
            flame: 'Flamme',
            infinity: 'Infinité',
            protection: 'Protection',
            fire_protection: 'Protection contre le feu',
            feather_falling: 'Chute Amortie',
            blast_protection: 'Protection contre les explosions',
            projectile_protection: 'Protection contre les projectiles',
            respiration: 'Apnée',
            aqua_affinity: 'Affinité Aquatique',
            thorns: 'Épines',
            depth_strider: 'Agilité Aquatique',
            frost_walker: 'Semelles Givrnates',
            soul_speed: 'Agilité des Âmes',
            swift_sneak: 'Furtivité Rapide',
            loyalty: 'Loyauté',
            impaling: 'Empalement',
            riptide: 'Impulsion',
            channeling: 'Canalisation',
            multishot: 'Tir Multiple',
            quick_charge: 'Charge Rapide',
            piercing: 'Transpercement'
        }
    },
    it: {
        ui: {
            headerTitle: '⚔️ Generatore Comandi Minecraft',
            headerSubtitle: 'Crea comandi oggetto facilmente',
            itemSelectLabel: 'Seleziona Oggetto',
            quantityInputLabel: 'Quantità',
            enchantmentsLabel: 'Incantesimi',
            addEnchantBtn: '+ Aggiungi Incantesimo',
            silentModeText: '🔇 Modalità Silenziosa',
            silentModeHint: 'Il comando non apparirà in chat',
            outputTitle: 'Comando Generato',
            copyBtn: '📋 Copia',
            commandPlaceholder: 'Il comando apparirà qui...',
            selectItemPlaceholder: 'Scegli un oggetto...',
            selectEnchantPlaceholder: 'Scegli incantesimo...',
            enchantLevelPlaceholder: 'Livello',
            maxLevelInfo: 'Livello Max:',
            copied: '✓ Copiato!',
            copyError: 'Errore copia.',
            opItemsBtn: '⚡ Oggetti OP (Set Master)',
            opItemsTitle: '⚡ Set Oggetti Definitivo',
            copyCommand: 'Copia',
            commandDescription: 'Descrizione:',
            versionSelectLabel: 'Versione Gioco',
            versionOld: '1.20.4 e inferiori',
            versionNew: '1.20.5 e superiori',
            displaySettingsTitle: 'Impostazioni Visualizzazione',
            customNameLabel: 'Nome Oggetto',
            customNamePlaceholder: 'Es: Ammazzadraghi',
            boldLabel: 'Grassetto',
            italicLabel: 'Corsivo',
            loreLabel: 'Lore (Descrizione)',
            lorePlaceholder: 'Linee di lore...',
            presetsTitle: 'Preset',
            presetPlaceholder: 'Nome Preset...',
            saveBtn: 'Salva',
            loadBtn: 'Carica',
            deleteBtn: 'Elimina',
            targetSelectLabel: 'Obiettivo',
            targetPlaceholder: 'Nome Giocatore',
            unbreakableLabel: 'Indistruttibile',
            searchPlaceholder: '🔍 Cerca...',
            selectPresetPlaceholder: 'Seleziona un preset...'
        },
        content: {
            contentTitle: 'Cos\'è il Generatore di Comandi Minecraft?',
            contentDesc: 'Questo strumento permette ai giocatori di Minecraft di generare comandi <strong>/give</strong> complessi in pochi secondi. Basta lottare con codici lunghi nei command block o in chat. Che sia una spada in netherite per la versione <strong>1.21</strong> o set in diamante per la <strong>1.8</strong>; MC AI Command Generator risponde a tutte le tue esigenze.',
            featuresTitle: 'Caratteristiche',
            feature1: '✨ <strong>Nomi e Lore Personalizzati:</strong> Aggiungi nomi colorati e descrizioni ai tuoi oggetti.',
            feature2: '🔥 <strong>Incantesimi Illimitati:</strong> Vai oltre i limiti vanilla come Affilatezza 1000, Efficienza 32767.',
            feature3: '🛡️ <strong>Indistruttibile:</strong> Crea oggetti "Indistruttibili" che non si rompono mai.',
            feature4: '⚡ <strong>Set Oggetti OP:</strong> Ottieni gli oggetti più forti con un clic usando "Set Master".',
            feature5: '🌍 <strong>Supporto Multi-Lingua:</strong> Usa in Turco, Inglese, Tedesco e oltre 10 lingue.',
            guideTitle: 'Come fare una Spada OP in Minecraft?',
            guideStep1: '1. <strong>Seleziona Oggetto:</strong> Scegli "Spada di Diamante" o "Spada di Netherite" dalla lista.',
            guideStep2: '2. <strong>Aggiungi Incantesimo:</strong> Seleziona "Affilatezza" (Sharpness) e imposta il livello a 255 (o più).',
            guideStep3: '3. <strong>Rendi Indistruttibile:</strong> Spunta la casella "Indistruttibile".',
            guideStep4: '4. <strong>Copia:</strong> Copia il comando generato e incollalo in un command block nel gioco.'
        },
        targets: {
            s: '@s (Se stesso)',
            p: '@p (Più vicino)',
            a: '@a (Tutti)',
            e: '@e (Entità)',
            r: '@r (Casuale)',
            custom: 'Personalizzato...'
        },
        colors: {
            default: 'Predefinito',
            white: 'Bianco',
            red: 'Rosso',
            dark_red: 'Rosso Scuro',
            gold: 'Oro',
            green: 'Verde',
            dark_green: 'Verde Scuro',
            aqua: 'Acqua',
            dark_aqua: 'Acqua Scuro',
            blue: 'Blu',
            dark_blue: 'Blu Scuro',
            light_purple: 'Viola Chiaro',
            dark_purple: 'Viola',
            yellow: 'Giallo',
            gray: 'Grigio',
            dark_gray: 'Grigio Scuro',
            black: 'Nero'
        },
        itemGroups: {
            weapons: 'Armi',
            tools: 'Attrezzi',
            armor: 'Armatura',
            special: 'Oggetti Speciali'
        },
        items: {
            diamond_sword: 'Spada di Diamante',
            iron_sword: 'Spada di Ferro',
            golden_sword: 'Spada d\'Oro',
            stone_sword: 'Spada di Pietra',
            wooden_sword: 'Spada di Legno',
            bow: 'Arco',
            crossbow: 'Balestra',
            trident: 'Tridente',
            diamond_pickaxe: 'Piccone di Diamante',
            iron_pickaxe: 'Piccone di Ferro',
            diamond_axe: 'Ascia di Diamante',
            diamond_shovel: 'Pala di Diamante',
            diamond_hoe: 'Zappa di Diamante',
            diamond_helmet: 'Elmo di Diamante',
            diamond_chestplate: 'Corazza di Diamante',
            diamond_leggings: 'Gambali di Diamante',
            diamond_boots: 'Stivali di Diamante',
            golden_apple: 'Mela d\'Oro',
            enchanted_golden_apple: 'Mela d\'Oro Incantata',
            ender_pearl: 'Perla di Ender',
            diamond: 'Diamante',
            emerald: 'Smeraldo',
            netherite_ingot: 'Lingotto di Netherite'
        },
        enchantments: {
            sharpness: 'Affilatezza',
            smite: 'Anatema',
            bane_of_arthropods: 'Flagello degli Artropodi',
            knockback: 'Contraccolpo',
            fire_aspect: 'Aspetto di Fuoco',
            looting: 'Saccheggio',
            sweeping_edge: 'Lama Sferzante',
            unbreaking: 'Indistruttibilità',
            mending: 'Ripristino',
            efficiency: 'Efficienza',
            silk_touch: 'Tocco di Velluto',
            fortune: 'Fortuna',
            power: 'Potenza',
            punch: 'Impatto',
            flame: 'Fiamma',
            infinity: 'Infinità',
            protection: 'Protezione',
            fire_protection: 'Protezione dal Fuoco',
            feather_falling: 'Atterraggio Morbido',
            blast_protection: 'Protezione dalle Esplosioni',
            projectile_protection: 'Protezione dai Proiettili',
            respiration: 'Respirazione',
            aqua_affinity: 'Affinità all\'Acqua',
            thorns: 'Spine',
            depth_strider: 'Passo Anfibio',
            frost_walker: 'Camminatore del Gelo',
            soul_speed: 'Velocità delle Anime',
            swift_sneak: 'Furtività Rapida',
            loyalty: 'Lealtà',
            impaling: 'Impalamanto',
            riptide: 'Risacca',
            channeling: 'Canalizzazione',
            multishot: 'Multitiro',
            quick_charge: 'Carica Rapida',
            piercing: 'Perforazione'
        }
    },
    pt: {
        ui: {
            headerTitle: '⚔️ Gerador de Comandos Minecraft',
            headerSubtitle: 'Crie comandos de itens facilmente',
            itemSelectLabel: 'Selecionar Item',
            quantityInputLabel: 'Quantidade',
            enchantmentsLabel: 'Encantamentos',
            addEnchantBtn: '+ Adicionar Encantamento',
            silentModeText: '🔇 Modo Silencioso',
            silentModeHint: 'Comando não aparecerá no chat',
            outputTitle: 'Comando Gerado',
            copyBtn: '📋 Copiar',
            commandPlaceholder: 'O comando aparecerá aqui...',
            selectItemPlaceholder: 'Selecione um item...',
            selectEnchantPlaceholder: 'Escolher encantamento...',
            enchantLevelPlaceholder: 'Nível',
            maxLevelInfo: 'Nível Máx:',
            copied: '✓ Copiado!',
            copyError: 'Erro ao copiar.',
            opItemsBtn: '⚡ Itens OP (Set Mestre)',
            opItemsTitle: '⚡ Set de Itens Supremo',
            copyCommand: 'Copiar',
            commandDescription: 'Descrição:',
            versionSelectLabel: 'Versão do Jogo',
            versionOld: '1.20.4 e inferior',
            versionNew: '1.20.5 e superior',
            displaySettingsTitle: 'Configurações de Exibição',
            customNameLabel: 'Nome do Item',
            customNamePlaceholder: 'Ex: Matador de Dragões',
            boldLabel: 'Negrito',
            italicLabel: 'Itálico',
            loreLabel: 'Lore (Descrição)',
            lorePlaceholder: 'Linhas de lore...',
            presetsTitle: 'Predefinições',
            presetPlaceholder: 'Nome da Predefinição...',
            saveBtn: 'Salvar',
            loadBtn: 'Carregar',
            deleteBtn: 'Excluir',
            targetSelectLabel: 'Alvo',
            targetPlaceholder: 'Nome do Jogador',
            unbreakableLabel: 'Indestrutível',
            searchPlaceholder: '🔍 Pesquisar...',
            selectPresetPlaceholder: 'Selezionar predefinição...'
        },
        content: {
            contentTitle: 'O que é o Gerador de Comandos Minecraft?',
            contentDesc: 'Esta ferramenta permite que jogadores de Minecraft gerem comandos <strong>/give</strong> complexos em segundos. Sem mais lutas com códigos longos em blocos de comando ou chat. Seja uma espada de netherite para a versão <strong>1.21</strong> ou sets de diamante para <strong>1.8</strong>; MC AI Command Generator atende a todas as suas necessidades.',
            featuresTitle: 'Recursos',
            feature1: '✨ <strong>Nome e Lore Personalizados:</strong> Adicione nomes coloridos e descrições aos seus itens.',
            feature2: '🔥 <strong>Encantamentos Ilimitados:</strong> Vá além dos limites vanilla como Afiação 1000, Eficiência 32767.',
            feature3: '🛡️ <strong>Indestrutível:</strong> Crie itens "Indestrutíveis" que nunca quebram.',
            feature4: '⚡ <strong>Sets de Itens OP:</strong> Obtenha os itens mais fortes com um clique usando "Set Mestre".',
            feature5: '🌍 <strong>Suporte Multi-Idioma:</strong> Use em Turco, Inglês, Alemão e mais de 10 idiomas.',
            guideTitle: 'Como fazer uma Espada OP no Minecraft?',
            guideStep1: '1. <strong>Selecionar Item:</strong> Escolha "Espada de Diamante" ou "Espada de Netherite" na lista.',
            guideStep2: '2. <strong>Adicionar Encantamento:</strong> Selecione "Afiação" (Sharpness) e defina o nível para 255 (ou mais).',
            guideStep3: '3. <strong>Tornar Indestrutível:</strong> Marque a caixa "Indestrutível".',
            guideStep4: '4. <strong>Copiar:</strong> Copie o comando gerado e cole em um bloco de comando no jogo.'
        },
        targets: {
            s: '@s (Si mesmo)',
            p: '@p (Mais próximo)',
            a: '@a (Todos)',
            e: '@e (Entidades)',
            r: '@r (Aleatório)',
            custom: 'Personalizado...'
        },
        colors: {
            default: 'Padrão',
            white: 'Branco',
            red: 'Vermelho',
            dark_red: 'Vermelho Escuro',
            gold: 'Ouro',
            green: 'Verde',
            dark_green: 'Verde Escuro',
            aqua: 'Aqua',
            dark_aqua: 'Aqua Escuro',
            blue: 'Azul',
            dark_blue: 'Azul Escuro',
            light_purple: 'Roxo Claro',
            dark_purple: 'Roxo',
            yellow: 'Amarelo',
            gray: 'Cinza',
            dark_gray: 'Cinza Escuro',
            black: 'Preto'
        },
        itemGroups: {
            weapons: 'Armas',
            tools: 'Ferramentas',
            armor: 'Armadura',
            special: 'Itens Especiais'
        },
        items: {
            diamond_sword: 'Espada de Diamante',
            iron_sword: 'Espada de Ferro',
            golden_sword: 'Espada de Ouro',
            stone_sword: 'Espada de Pedra',
            wooden_sword: 'Espada de Madeira',
            bow: 'Arco',
            crossbow: 'Besta',
            trident: 'Tridente',
            diamond_pickaxe: 'Picareta de Diamante',
            iron_pickaxe: 'Picareta de Ferro',
            diamond_axe: 'Machado de Diamante',
            diamond_shovel: 'Pá de Diamante',
            diamond_hoe: 'Enxada de Diamante',
            diamond_helmet: 'Capacete de Diamante',
            diamond_chestplate: 'Peitoral de Diamante',
            diamond_leggings: 'Calças de Diamante',
            diamond_boots: 'Botas de Diamante',
            golden_apple: 'Maçã Dourada',
            enchanted_golden_apple: 'Maçã Dourada Encantada',
            ender_pearl: 'Pérola do Ender',
            diamond: 'Diamante',
            emerald: 'Esmeralda',
            netherite_ingot: 'Barra de Netherita'
        },
        enchantments: {
            sharpness: 'Afiação',
            smite: 'Julgamento',
            bane_of_arthropods: 'Perdição dos Artrópodes',
            knockback: 'Repulsão',
            fire_aspect: 'Aspecto Flamejante',
            looting: 'Saque',
            sweeping_edge: 'Alcance',
            unbreaking: 'Inquebrável',
            mending: 'Remendo',
            efficiency: 'Eficiência',
            silk_touch: 'Toque Suave',
            fortune: 'Fortuna',
            power: 'Força',
            punch: 'Impacto',
            flame: 'Chama',
            infinity: 'Infinito',
            protection: 'Proteção',
            fire_protection: 'Proteção contra Fogo',
            feather_falling: 'Peso Pena',
            blast_protection: 'Proteção contra Explosões',
            projectile_protection: 'Proteção contra Projéteis',
            respiration: 'Respiração',
            aqua_affinity: 'Afinidade Aquática',
            thorns: 'Espinhos',
            depth_strider: 'Passos Profundos',
            frost_walker: 'Caminhada Geada',
            soul_speed: 'Velocidade das Almas',
            swift_sneak: 'Esgueirar Rápido',
            loyalty: 'Lealdade',
            impaling: 'Empalamento',
            riptide: 'Correnteza',
            channeling: 'Canalização',
            multishot: 'Tiro Múltiplo',
            quick_charge: 'Carga Rápida',
            piercing: 'Perfuração'
        }
    },
    ru: {
        ui: {
            headerTitle: '⚔️ Генератор Команд Minecraft',
            headerSubtitle: 'Создавайте команды предметов',
            itemSelectLabel: 'Выберите Предмет',
            quantityInputLabel: 'Количество',
            enchantmentsLabel: 'Зачарования',
            addEnchantBtn: '+ Добавить Зачарование',
            silentModeText: '🔇 Тихий Режим',
            silentModeHint: 'Команда не будет видна в чате',
            outputTitle: 'Созданная Команда',
            copyBtn: '📋 Копировать',
            commandPlaceholder: 'Команда появится здесь...',
            selectItemPlaceholder: 'Выберите предмет...',
            selectEnchantPlaceholder: 'Выберите зачарование...',
            enchantLevelPlaceholder: 'Уровень',
            maxLevelInfo: 'Макс:',
            copied: '✓ Скопировано!',
            copyError: 'Ошибка копирования.',
            opItemsBtn: '⚡ OP Предметы',
            opItemsTitle: '⚡ Лучшие Предметы',
            copyCommand: 'Копировать',
            commandDescription: 'Описание:',
            versionSelectLabel: 'Версия Игры',
            versionOld: '1.20.4 и ниже',
            versionNew: '1.20.5 и выше',
            displaySettingsTitle: 'Настройки Отображения',
            customNameLabel: 'Название Предмета',
            customNamePlaceholder: 'Напр: Меч Дракона',
            boldLabel: 'Жирный',
            italicLabel: 'Курсив',
            loreLabel: 'Описание (Lore)',
            lorePlaceholder: 'Каждая строка - новая строка описания...',
            presetsTitle: 'Пресеты',
            presetPlaceholder: 'Имя Пресета...',
            saveBtn: 'Сохранить',
            loadBtn: 'Загрузить',
            deleteBtn: 'Удалить',
            targetSelectLabel: 'Цель',
            targetPlaceholder: 'Имя Игрока',
            unbreakableLabel: 'Неразрушимость',
            searchPlaceholder: '🔍 Поиск...',
            selectPresetPlaceholder: 'Выберите пресет...'
        },
        content: {
            contentTitle: 'Что такое Генератор Команд Minecraft?',
            contentDesc: 'Этот инструмент позволяет игрокам Minecraft генерировать сложные команды <strong>/give</strong> за секунды. Больше не нужно мучиться с длинными кодами в командных блоках или чате. Будь то незеритовый меч для версии <strong>1.21</strong> или алмазные сеты для <strong>1.8</strong>; MC AI Command Generator отвечает всем вашим потребностям.',
            featuresTitle: 'Особенности',
            feature1: '✨ <strong>Кастомное Имя и Lore:</strong> Добавляйте цветные имена и описания к вашим предметам.',
            feature2: '🔥 <strong>Неограниченные Зачарования:</strong> Выходите за пределы ванильных лимитов, такие как Острота 1000, Эффективность 32767.',
            feature3: '🛡️ <strong>Неразрушимость:</strong> Создавайте "Неразрушимые" предметы, которые никогда не ломаются.',
            feature4: '⚡ <strong>OP Сеты Предметов:</strong> Получите самые сильные предметы одним кликом, используя "Мастер Сет".',
            feature5: '🌍 <strong>Мультиязычная Поддержка:</strong> Используйте на Турецком, Английском, Немецком и еще 10+ языках.',
            guideTitle: 'Как сделать OP Меч в Minecraft?',
            guideStep1: '1. <strong>Выберите Предмет:</strong> Выберите "Алмазный Меч" или "Незеритовый Меч" из списка.',
            guideStep2: '2. <strong>Добавьте Зачарование:</strong> Выберите "Острота" (Sharpness) и установите уровень 255 (или выше).',
            guideStep3: '3. <strong>Сделайте Неразрушимым:</strong> Отметьте галочку "Неразрушимость".',
            guideStep4: '4. <strong>Копировать:</strong> Скопируйте сгенерированную команду и вставьте ее в командный блок в игре.'
        },
        itemGroups: {
            weapons: 'Оружие',
            tools: 'Инструменты',
            armor: 'Броня',
            special: 'Особые Предметы'
        },
        items: {
            diamond_sword: 'Алмазный меч',
            iron_sword: 'Железный меч',
            golden_sword: 'Золотой меч',
            stone_sword: 'Каменный меч',
            wooden_sword: 'Деревянный меч',
            bow: 'Лук',
            crossbow: 'Арбалет',
            trident: 'Трезубец',
            diamond_pickaxe: 'Алмазная кирка',
            iron_pickaxe: 'Железная кирка',
            diamond_axe: 'Алмазный топор',
            diamond_shovel: 'Алмазная лопата',
            diamond_hoe: 'Алмазная мотыга',
            diamond_helmet: 'Алмазный шлем',
            diamond_chestplate: 'Алмазный нагрудник',
            diamond_leggings: 'Алмазные поножи',
            diamond_boots: 'Алмазные ботинки',
            golden_apple: 'Золотое яблоко',
            enchanted_golden_apple: 'Зачарованное золотое яблоко',
            ender_pearl: 'Жемчуг Эндера',
            diamond: 'Алмаз',
            emerald: 'Изумруд',
            netherite_ingot: 'Незеритовый слиток'
        },
        enchantments: {
            sharpness: 'Острота',
            smite: 'Небесная кара',
            bane_of_arthropods: 'Бич членистоногих',
            knockback: 'Отдача',
            fire_aspect: 'Заговор огня',
            looting: 'Добыча',
            sweeping_edge: 'Разящий клинок',
            unbreaking: 'Прочность',
            mending: 'Починка',
            efficiency: 'Эффективность',
            silk_touch: 'Шелковое касание',
            fortune: 'Удача',
            power: 'Сила',
            punch: 'Откидывание',
            flame: 'Воспламенение',
            infinity: 'Бесконечность',
            protection: 'Защита',
            fire_protection: 'Огнеупорность',
            feather_falling: 'Невесомость',
            blast_protection: 'Взрывоустойчивость',
            projectile_protection: 'Защита от снарядов',
            respiration: 'Подводное дыхание',
            aqua_affinity: 'Подводник',
            thorns: 'Шипы',
            depth_strider: 'Подводная ходьба',
            frost_walker: 'Ледоход',
            soul_speed: 'Скорость души',
            swift_sneak: 'Проворство',
            loyalty: 'Верность',
            impaling: 'Понзание',
            riptide: 'Тягун',
            channeling: 'Громовержец',
            multishot: 'Тройной выстрел',
            quick_charge: 'Быстрая перезарядка',
            piercing: 'Пронзающая стрела'
        }
    },
    ja: {
        ui: {
            headerTitle: '⚔️ マインクラフトコマンド生成',
            headerSubtitle: 'アイテムコマンドを簡単に作成',
            itemSelectLabel: 'アイテム選択',
            quantityInputLabel: '数量',
            enchantmentsLabel: 'エンチャント',
            addEnchantBtn: '+ エンチャント追加',
            silentModeText: '🔇 サイレントモード',
            silentModeHint: 'チャットに表示されません',
            outputTitle: '生成されたコマンド',
            copyBtn: '📋 コピー',
            commandPlaceholder: 'ここにコマンドが表示されます...',
            selectItemPlaceholder: 'アイテムを選択...',
            selectEnchantPlaceholder: 'エンチャントを選択...',
            enchantLevelPlaceholder: 'レベル',
            maxLevelInfo: '最大:',
            copied: '✓ コピー完了!',
            copyError: 'コピー失敗。',
            opItemsBtn: '⚡ OPアイテム (最強セット)',
            opItemsTitle: '⚡ アルティメットアイテムセット',
            copyCommand: 'コピー',
            commandDescription: '説明:',
            versionSelectLabel: 'ゲームバージョン',
            versionOld: '1.20.4 以下',
            versionNew: '1.20.5 以上',
            displaySettingsTitle: '表示設定',
            customNameLabel: 'アイテム名',
            customNamePlaceholder: '例：ドラゴンスレイヤー',
            boldLabel: '太字',
            italicLabel: '斜体',
            loreLabel: '説明文 (Lore)',
            lorePlaceholder: '説明文の行...',
            presetsTitle: 'プリセット',
            presetPlaceholder: 'プリセット名...',
            saveBtn: '保存',
            loadBtn: '読み込み',
            deleteBtn: '削除',
            targetSelectLabel: 'ターゲット',
            targetPlaceholder: 'プレイヤー名',
            unbreakableLabel: '破壊不可',
            searchPlaceholder: '🔍 検索...',
            selectPresetPlaceholder: 'プリセットを選択...'
        },
        content: {
            contentTitle: 'Minecraft コマンド生成ツールとは？',
            contentDesc: 'このツールを使用すると、Minecraftプレイヤーは複雑な <strong>/give</strong> コマンドを数秒で生成できます。コマンドブロックやチャットで長いコードと格闘する必要はもうありません。バージョン <strong>1.21</strong> のネザライトの剣でも、<strong>1.8</strong> のダイヤモンドセットでも、MC AI コマンドジェネレーターはすべてのニーズに応えます。',
            featuresTitle: '特徴',
            feature1: '✨ <strong>カスタム名と説明 (Lore):</strong> アイテムにカラフルな名前と説明を追加します。',
            feature2: '🔥 <strong>無制限のエンチャント:</strong> ダメージ増加1000、効率強化32767など、バニラの制限を超えます。',
            feature3: '🛡️ <strong>破壊不可:</strong> 決して壊れない「破壊不可」アイテムを作成します。',
            feature4: '⚡ <strong>OPアイテムセット:</strong> 「マスターセット」を使用して、ワンクリックで最強のアイテムを入手します。',
            feature5: '🌍 <strong>多言語サポート:</strong> トルコ語、英語、ドイツ語など10以上の言語で使用できます。',
            guideTitle: 'MinecraftでOPの剣を作る方法は？',
            guideStep1: '1. <strong>アイテム選択:</strong> リストから「ダイヤモンドの剣」または「ネザライトの剣」を選択します。',
            guideStep2: '2. <strong>エンチャント追加:</strong> 「ダメージ増加」(Sharpness)を選択し、レベルを255（またはそれ以上）に設定します。',
            guideStep3: '3. <strong>破壊不可にする:</strong> 「破壊不可」ボックスをチェックします。',
            guideStep4: '4. <strong>コピー:</strong> 生成されたコマンドをコピーし、ゲーム内のコマンドブロックに貼り付けます。'
        },
        targets: {
            s: '@s (自分)',
            p: '@p (最寄り)',
            a: '@a (すべて)',
            e: '@e (エンティティ)',
            r: '@r (ランダム)',
            custom: 'カスタム...'
        },
        colors: {
            default: 'デフォルト',
            white: '白',
            red: '赤',
            dark_red: '濃い赤',
            gold: '金',
            green: '緑',
            dark_green: '濃い緑',
            aqua: '水色',
            dark_aqua: '濃い水色',
            blue: '青',
            dark_blue: '濃い青',
            light_purple: '薄紫',
            dark_purple: '紫',
            yellow: '黄',
            gray: '灰色',
            dark_gray: '濃い灰色',
            black: '黒'
        },
        itemGroups: {
            weapons: '武器',
            tools: '道具',
            armor: '防具',
            special: '特別'
        },
        items: {
            diamond_sword: 'ダイヤモンドの剣',
            iron_sword: '鉄の剣',
            golden_sword: '金の剣',
            stone_sword: '石の剣',
            wooden_sword: '木の剣',
            bow: '弓',
            crossbow: 'クロスボウ',
            trident: 'トライデント',
            diamond_pickaxe: 'ダイヤモンドのツルハシ',
            iron_pickaxe: '鉄のツルハシ',
            diamond_axe: 'ダイヤモンドの斧',
            diamond_shovel: 'ダイヤモンドのシャベル',
            diamond_hoe: 'ダイヤモンドのクワ',
            diamond_helmet: 'ダイヤモンドのヘルメット',
            diamond_chestplate: 'ダイヤモンドのチェストプレート',
            diamond_leggings: 'ダイヤモンドのレギンス',
            diamond_boots: 'ダイヤモンドのブーツ',
            golden_apple: '金のリンゴ',
            enchanted_golden_apple: 'エンチャントされた金のリンゴ',
            ender_pearl: 'エンダーパール',
            diamond: 'ダイヤモンド',
            emerald: 'エメラルド',
            netherite_ingot: 'ネザライトインゴット'
        },
        enchantments: {
            sharpness: 'ダメージ増加',
            smite: 'アンデッド特効',
            bane_of_arthropods: '虫特効',
            knockback: 'ノックバック',
            fire_aspect: '火属性',
            looting: 'ドロップ増加',
            sweeping_edge: '範囲ダメージ増加',
            unbreaking: '耐久力',
            mending: '修繕',
            efficiency: '効率強化',
            silk_touch: 'シルクタッチ',
            fortune: '幸運',
            power: '射撃ダメージ増加',
            punch: 'パンチ',
            flame: 'フレイム',
            infinity: '無限',
            protection: 'ダメージ軽減',
            fire_protection: '火炎耐性',
            feather_falling: '落下耐性',
            blast_protection: '爆発耐性',
            projectile_protection: '飛び道具耐性',
            respiration: '水中呼吸',
            aqua_affinity: '水中採掘',
            thorns: '棘の鎧',
            depth_strider: '水中歩行',
            frost_walker: '氷渡り',
            soul_speed: 'ソウルスピード',
            swift_sneak: 'スニーク速度上昇',
            loyalty: '忠誠',
            impaling: '水生特効',
            riptide: '激流',
            channeling: '召雷',
            multishot: '拡散',
            quick_charge: '高速装填',
            piercing: '貫通'
        }
    },
    ko: {
        ui: {
            headerTitle: '⚔️ 마인크래프트 명령어 생성기',
            headerSubtitle: '아이템 명령어를 쉽게 생성하세요',
            itemSelectLabel: '아이템 선택',
            quantityInputLabel: '수량',
            enchantmentsLabel: '마법 부여',
            addEnchantBtn: '+ 마법 추가',
            silentModeText: '🔇 조용한 모드',
            silentModeHint: '명령어가 채팅에 표시되지 않음',
            outputTitle: '생성된 명령어',
            copyBtn: '📋 복사',
            commandPlaceholder: '명령어가 여기에 표시됩니다...',
            selectItemPlaceholder: '아이템을 선택하세요...',
            selectEnchantPlaceholder: '마법 선택...',
            enchantLevelPlaceholder: '레벨',
            maxLevelInfo: '최대:',
            copied: '✓ 복사됨!',
            copyError: '복사 실패.',
            opItemsBtn: '⚡ OP 아이템 (마스터 세트)',
            opItemsTitle: '⚡ 궁극의 아이템 세트',
            copyCommand: '복사',
            commandDescription: '설명:',
            versionSelectLabel: '게임 버전',
            versionOld: '1.20.4 이하',
            versionNew: '1.20.5 이상',
            displaySettingsTitle: 'Display Settings',
            customNameLabel: 'Item Name',
            customNamePlaceholder: 'Ex: Dragon Slayer',
            boldLabel: 'Bold',
            italicLabel: 'Italic',
            loreLabel: 'Lore',
            lorePlaceholder: 'Lore lines...',
            presetsTitle: 'Presets',
            presetPlaceholder: 'Preset Name...',
            saveBtn: 'Save',
            loadBtn: 'Load',
            deleteBtn: 'Delete',
            targetSelectLabel: 'Target',
            targetPlaceholder: 'Player Name',
            unbreakableLabel: 'Unbreakable',
            searchPlaceholder: '🔍 Search...',
            selectPresetPlaceholder: 'Select preset...'
        },
        content: {
            contentTitle: '마인크래프트 명령어 생성기란 무엇입니까?',
            contentDesc: '이 도구를 사용하면 마인크래프트 플레이어가 복잡한 <strong>/give</strong> 명령어를 몇 초 만에 생성할 수 있습니다. 명령 블록이나 채팅에서 긴 코드와 씨름할 필요가 없습니다. 버전 <strong>1.21</strong>용 네더라이트 검이든 <strong>1.8</strong>용 다이아몬드 세트든; MC AI 명령어 생성기는 모든 요구 사항을 충족합니다.',
            featuresTitle: '특징',
            feature1: '✨ <strong>사용자 지정 이름 및 설명 (Lore):</strong> 아이템에 다채로운 이름과 설명을 추가하십시오.',
            feature2: '🔥 <strong>무제한 마법 부여:</strong> 날카로움 1000, 효율 32767과 같은 바닐라 한계를 뛰어 넘으십시오.',
            feature3: '🛡️ <strong>파괴 불가:</strong> 절대 부서지지 않는 "파괴 불가" 아이템을 만드십시오.',
            feature4: '⚡ <strong>OP 아이템 세트:</strong> "마스터 세트"를 사용하여 한 번의 클릭으로 가장 강력한 아이템을 얻으십시오.',
            feature5: '🌍 <strong>다국어 지원:</strong> 터키어, 영어, 독일어 및 10개 이상의 언어로 사용하십시오.',
            guideTitle: '마인크래프트에서 OP 검을 만드는 방법?',
            guideStep1: '1. <strong>아이템 선택:</strong> 목록에서 "다이아몬드 검" 또는 "네더라이트 검"을 선택하십시오.',
            guideStep2: '2. <strong>마법 추가:</strong> "날카로움" (Sharpness)을 선택하고 레벨을 255 (또는 그 이상)로 설정하십시오.',
            guideStep3: '3. <strong>파괴 불가 만들기:</strong> "파괴 불가" 상자를 체크하십시오.',
            guideStep4: '4. <strong>복사:</strong> 생성된 명령어를 복사하여 게임의 명령 블록에 붙여넣으십시오.'
        },
        itemGroups: {
            weapons: '무기',
            tools: '도구',
            armor: '방어구',
            special: '특수 아이템'
        },
        items: {
            diamond_sword: '다이아몬드 검',
            iron_sword: '철 검',
            golden_sword: '금 검',
            stone_sword: '돌 검',
            wooden_sword: '나무 검',
            bow: '활',
            crossbow: '쇠뇌',
            trident: '삼크창',
            diamond_pickaxe: '다이아몬드 곡괭이',
            iron_pickaxe: '철 곡괭이',
            diamond_axe: '다이아몬드 도끼',
            diamond_shovel: '다이아몬드 삽',
            diamond_hoe: '다이아몬드 괭이',
            diamond_helmet: '다이아몬드 투구',
            diamond_chestplate: '다이아몬드 흉갑',
            diamond_leggings: '다이아몬드 레깅스',
            diamond_boots: '다이아몬드 부츠',
            golden_apple: '황금 사과',
            enchanted_golden_apple: '마법이 부여된 황금 사과',
            ender_pearl: '엔더 진주',
            diamond: '다이아몬드',
            emerald: '에메랄드',
            netherite_ingot: '네더라이트 주괴'
        },
        enchantments: {
            sharpness: '날카로움',
            smite: '강타',
            bane_of_arthropods: '살충',
            knockback: '밀치기',
            fire_aspect: '발화',
            looting: '약탈',
            sweeping_edge: '휩쓸기',
            unbreaking: '내구성',
            mending: '수선',
            efficiency: '효율',
            silk_touch: '섬세한 손길',
            fortune: '행운',
            power: '힘',
            punch: '밀어내기',
            flame: '화염',
            infinity: '무한',
            protection: '보호',
            fire_protection: '화염 보호',
            feather_falling: '가벼운 착지',
            blast_protection: '폭발 보호',
            projectile_protection: '투사체 보호',
            respiration: '호흡',
            aqua_affinity: '친수성',
            thorns: '가시',
            depth_strider: '물갈퀴',
            frost_walker: '차가운 걸음',
            soul_speed: '영혼 가속',
            swift_sneak: '신속한 잠행',
            loyalty: '충성',
            impaling: '찌르기',
            riptide: '급류',
            channeling: '집전',
            multishot: '다중 발사',
            quick_charge: '빠른 장전',
            piercing: '관통'
        }
    },
    zh: {
        ui: {
            headerTitle: '⚔️ Minecraft 指令生成器',
            headerSubtitle: '轻松创建物品指令',
            itemSelectLabel: '选择物品',
            quantityInputLabel: '数量',
            enchantmentsLabel: '附魔',
            addEnchantBtn: '+ 添加附魔',
            silentModeText: '🔇 静音模式',
            silentModeHint: '指令不会在聊天中显示',
            outputTitle: '生成的指令',
            copyBtn: '📋 复制',
            commandPlaceholder: '指令将在此处显示...',
            selectItemPlaceholder: '选择一个物品...',
            selectEnchantPlaceholder: '选择附魔...',
            enchantLevelPlaceholder: '等级',
            maxLevelInfo: '最大等级:',
            copied: '✓ 已复制!',
            copyError: '复制失败。',
            opItemsBtn: '⚡ OP 物品 (大师套装)',
            opItemsTitle: '⚡ 终极物品套装',
            copyCommand: '复制',
            commandDescription: '描述:',
            versionSelectLabel: '游戏版本',
            versionOld: '1.20.4 及以下',
            versionNew: '1.20.5 及以上',
            displaySettingsTitle: '显示设置',
            customNameLabel: '物品名称',
            customNamePlaceholder: '例如：屠龙者',
            boldLabel: '粗体',
            italicLabel: '斜体',
            loreLabel: '说明 (Lore)',
            lorePlaceholder: '每行一条说明...',
            presetsTitle: '预设',
            presetPlaceholder: '预设名称...',
            saveBtn: '保存',
            loadBtn: '加载',
            deleteBtn: '删除',
            targetSelectLabel: '目标',
            targetPlaceholder: '玩家名称',
            unbreakableLabel: '不可破坏',
            searchPlaceholder: '🔍 搜索...',
            selectPresetPlaceholder: '选择预设...'
        },
        content: {
            contentTitle: '什么是 Minecraft 指令生成器？',
            contentDesc: '这个工具允许 Minecraft 玩家在几秒钟内生成复杂的 <strong>/give</strong> 指令。不再需要在命令方块或聊天中与长代码作斗争。无论是 <strong>1.21</strong> 版本的下界合金剑还是 <strong>1.8</strong> 的钻石套装；MC AI 指令生成器满足您的所有需求。',
            featuresTitle: '特点',
            feature1: '✨ <strong>自定义名称和说明 (Lore):</strong> 为您的物品添加多彩的名称和描述。',
            feature2: '🔥 <strong>无限附魔:</strong> 突破原版限制，如锋利 1000、效率 32767。',
            feature3: '🛡️ <strong>不可破坏:</strong> 制作永不损坏的“不可破坏”物品。',
            feature4: '⚡ <strong>OP 物品套装:</strong> 使用“大师套装”一键获取最强物品。',
            feature5: '🌍 <strong>多语言支持:</strong> 支持土耳其语、英语、德语等 10 多种语言。',
            guideTitle: '如何在 Minecraft 中制作 OP 剑？',
            guideStep1: '1. <strong>选择物品:</strong> 从列表中选择“钻石剑”或“下界合金剑”。',
            guideStep2: '2. <strong>添加附魔:</strong> 选择“锋利” (Sharpness) 并将等级设置为 255（或更高）。',
            guideStep3: '3. <strong>设为不可破坏:</strong> 勾选“不可破坏”框。',
            guideStep4: '4. <strong>复制:</strong> 复制生成的指令并将其粘贴到游戏中的命令方块中。'
        },
        itemGroups: {
            weapons: '武器',
            tools: '工具',
            armor: '盔甲',
            special: '特殊物品'
        },
        items: {
            diamond_sword: '钻石剑',
            iron_sword: '铁剑',
            golden_sword: '金剑',
            stone_sword: '石剑',
            wooden_sword: '木剑',
            bow: '弓',
            crossbow: '弩',
            trident: '三叉戟',
            diamond_pickaxe: '钻石镐',
            iron_pickaxe: '铁镐',
            diamond_axe: '钻石斧',
            diamond_shovel: '钻石锹',
            diamond_hoe: '钻石锄',
            diamond_helmet: '钻石头盔',
            diamond_chestplate: '钻石胸甲',
            diamond_leggings: '钻石护腿',
            diamond_boots: '钻石靴子',
            golden_apple: '金苹果',
            enchanted_golden_apple: '附魔金苹果',
            ender_pearl: '末影珍珠',
            diamond: '钻石',
            emerald: '绿宝石',
            netherite_ingot: '下界合金锭'
        },
        enchantments: {
            sharpness: '锋利',
            smite: '亡灵杀手',
            bane_of_arthropods: '节肢杀手',
            knockback: '击退',
            fire_aspect: '火焰附加',
            looting: '抢夺',
            sweeping_edge: '横扫之刃',
            unbreaking: '耐久',
            mending: '经验修补',
            efficiency: '效率',
            silk_touch: '精准采集',
            fortune: '时运',
            power: '力量',
            punch: '冲击',
            flame: '火矢',
            infinity: '无限',
            protection: '保护',
            fire_protection: '火焰保护',
            feather_falling: '摔落保护',
            blast_protection: '爆炸保护',
            projectile_protection: '弹射物保护',
            respiration: '水下呼吸',
            aqua_affinity: '水下速掘',
            thorns: '荆棘',
            depth_strider: '深海探索者',
            frost_walker: '冰霜行者',
            soul_speed: '灵魂疾行',
            swift_sneak: '迅捷潜行',
            loyalty: '忠诚',
            impaling: '穿刺',
            riptide: '激流',
            channeling: '引雷',
            multishot: '多重射击',
            quick_charge: '快速装填',
            piercing: '穿透'
        },
        targets: {
            s: '@s (Self)',
            p: '@p (Nearest)',
            a: '@a (All)',
            e: '@e (Entities)',
            r: '@r (Random)',
            custom: 'Custom...'
        },
        colors: {
            default: 'Default',
            white: 'White',
            red: 'Red',
            dark_red: 'Dark Red',
            gold: 'Gold',
            green: 'Green',
            dark_green: 'Dark Green',
            aqua: 'Aqua',
            dark_aqua: 'Dark Aqua',
            blue: 'Blue',
            dark_blue: 'Dark Blue',
            light_purple: 'Light Purple',
            dark_purple: 'Dark Purple',
            yellow: 'Yellow',
            gray: 'Gray',
            dark_gray: 'Dark Gray',
            black: 'Black'
        }
    },
    pl: {
        ui: {
            headerTitle: '⚔️ Generator Komend Minecraft',
            headerSubtitle: 'Łatwe tworzenie komend przedmiotów',
            itemSelectLabel: 'Wybierz Przedmiot',
            quantityInputLabel: 'Ilość',
            enchantmentsLabel: 'Zaklęcia',
            addEnchantBtn: '+ Dodaj Zaklęcie',
            silentModeText: '🔇 Tryb Cichy',
            silentModeHint: 'Komenda nie pojawi się na czacie',
            outputTitle: 'Wygenerowana Komenda',
            copyBtn: '📋 Kopiuj',
            commandPlaceholder: 'Komenda pojawi się tutaj...',
            selectItemPlaceholder: 'Wybierz przedmiot...',
            selectEnchantPlaceholder: 'Wybierz zaklęcie...',
            enchantLevelPlaceholder: 'Poziom',
            maxLevelInfo: 'Maks. Poz:',
            copied: '✓ Skopiowano!',
            copyError: 'Błąd kopiowania.',
            opItemsBtn: '⚡ Przedmioty OP (Zestaw Mistrza)',
            opItemsTitle: '⚡ Ostateczny Zestaw Przedmiotów',
            copyCommand: 'Kopiuj',
            commandDescription: 'Opis:',
            versionSelectLabel: 'Wersja Gry',
            versionOld: '1.20.4 i starsze',
            versionNew: '1.20.5 i nowsze',
            displaySettingsTitle: 'Ustawienia Wyświetlania',
            customNameLabel: 'Nazwa Przedmiotu',
            customNamePlaceholder: 'Np: Pogromca Smoków',
            boldLabel: 'Pogrubienie',
            italicLabel: 'Kursywa',
            loreLabel: 'Opis (Lore)',
            lorePlaceholder: 'Linie opisu...',
            presetsTitle: 'Zestawy',
            presetPlaceholder: 'Nazwa Zestawu...',
            saveBtn: 'Zapisz',
            loadBtn: 'Wczytaj',
            deleteBtn: 'Usuń',
            targetSelectLabel: 'Cel',
            targetPlaceholder: 'Nazwa Gracza',
            unbreakableLabel: 'Niezniszczalny',
            searchPlaceholder: '🔍 Szukaj...',
            selectPresetPlaceholder: 'Wybierz zestaw...'
        },
        content: {
            contentTitle: 'Czym jest Generator Komend Minecraft?',
            contentDesc: 'To narzędzie pozwala graczom Minecraft generować złożone komendy <strong>/give</strong> w kilka sekund. Koniec z zmaganiem się z długimi kodami w blokach poleceń lub na czacie. Czy to netheritowy miecz dla wersji <strong>1.21</strong>, czy diamentowe zestawy dla <strong>1.8</strong>; MC AI Generator Komend spełnia wszystkie Twoje potrzeby.',
            featuresTitle: 'Funkcje',
            feature1: '✨ <strong>Własna Nazwa i Opis (Lore):</strong> Dodaj kolorowe nazwy i opisy do swoich przedmiotów.',
            feature2: '🔥 <strong>Nielimitowane Zaklęcia:</strong> Przekraczaj limity waniliowe, takie jak Ostrość 1000, Wydajność 32767.',
            feature3: '🛡️ <strong>Niezniszczalność:</strong> Twórz "Niezniszczalne" przedmioty, które nigdy się nie psują.',
            feature4: '⚡ <strong>Zestawy Przedmiotów OP:</strong> Zdobądź najsilniejsze przedmioty jednym kliknięciem za pomocą "Zestawu Mistrza".',
            feature5: '🌍 <strong>Wsparcie Wielojęzyczne:</strong> Używaj w języku Tureckim, Angielskim, Niemieckim i ponad 10 innych.',
            guideTitle: 'Jak zrobić Miecz OP w Minecraft?',
            guideStep1: '1. <strong>Wybierz Przedmiot:</strong> Wybierz "Diamentowy Miecz" lub "Netheritowy Miecz" z listy.',
            guideStep2: '2. <strong>Dodaj Zaklęcie:</strong> Wybierz "Ostrość" (Sharpness) i ustaw poziom na 255 (lub wyższy).',
            guideStep3: '3. <strong>Zrób Niezniszczalny:</strong> Zaznacz pole "Niezniszczalny".',
            guideStep4: '4. <strong>Kopiuj:</strong> Skopiuj wygenerowaną komendę i wklej ją do bloku poleceń w grze.'
        },
        targets: {
            s: '@s (Sobie)',
            p: '@p (Najbliższy)',
            a: '@a (Wszyscy)',
            e: '@e (Byty)',
            r: '@r (Losowy)',
            custom: 'Własny...'
        },
        colors: {
            default: 'Domyślny',
            white: 'Biały',
            red: 'Czerwony',
            dark_red: 'Ciemnoczerwony',
            gold: 'Złoty',
            green: 'Zielony',
            dark_green: 'Ciemnozielony',
            aqua: 'Morski',
            dark_aqua: 'Ciemnomorski',
            blue: 'Niebieski',
            dark_blue: 'Ciemnoniebieski',
            light_purple: 'Jasnofioletowy',
            dark_purple: 'Fioletowy',
            yellow: 'Żółty',
            gray: 'Szary',
            dark_gray: 'Ciemnoszary',
            black: 'Czarny'
        },
        itemGroups: {
            weapons: 'Broń',
            tools: 'Narzędzia',
            armor: 'Zbroja',
            special: 'Specjalne'
        },
        items: {
            diamond_sword: 'Diamentowy Miecz',
            iron_sword: 'Żelazny Miecz',
            golden_sword: 'Złoty Miecz',
            stone_sword: 'Kamienny Miecz',
            wooden_sword: 'Drewniany Miecz',
            bow: 'Łuk',
            crossbow: 'Kusza',
            trident: 'Trójząb',
            diamond_pickaxe: 'Diamentowy Kilof',
            iron_pickaxe: 'Żelazny Kilof',
            diamond_axe: 'Diamentowa Siekiera',
            diamond_shovel: 'Diamentowa Łopata',
            diamond_hoe: 'Diamentowa Motyka',
            diamond_helmet: 'Diamentowy Hełm',
            diamond_chestplate: 'Diamentowy Napierśnik',
            diamond_leggings: 'Diamentowe Nogawice',
            diamond_boots: 'Diamentowe Buty',
            golden_apple: 'Złote Jabłko',
            enchanted_golden_apple: 'Zaklęte Złote Jabłko',
            ender_pearl: 'Perła Endu',
            diamond: 'Diament',
            emerald: 'Szmaragd',
            netherite_ingot: 'Sztabka Netheritu'
        },
        enchantments: {
            sharpness: 'Ostrość',
            smite: 'Pogromca Nieumarłych',
            bane_of_arthropods: 'Zmora Stawonogów',
            knockback: 'Odrzut',
            fire_aspect: 'Zaklęty Ogień',
            looting: 'Grabież',
            sweeping_edge: 'Szerokie Ostrze',
            unbreaking: 'Niezniszczalność',
            mending: 'Naprawa',
            efficiency: 'Wydajność',
            silk_touch: 'Jedwabny Dotyk',
            fortune: 'Szczęście',
            power: 'Moc',
            punch: 'Uderzenie',
            flame: 'Płomień',
            infinity: 'Nieskończoność',
            protection: 'Ochrona',
            fire_protection: 'Ochrona przed ogniem',
            feather_falling: 'Powolne Opadanie',
            blast_protection: 'Ochrona przed wybuchem',
            projectile_protection: 'Ochrona przed pociskami',
            respiration: 'Oddychanie',
            aqua_affinity: 'Wydajność pod wodą',
            thorns: 'Ciernie',
            depth_strider: 'Głębinowy Wędrowiec',
            frost_walker: 'Mroźny Piechur',
            soul_speed: 'Prędkość Dusz',
            swift_sneak: 'Szybkie Skradanie',
            loyalty: 'Lojalność',
            impaling: 'Przebicie',
            riptide: 'Torpeda',
            channeling: 'Porażenie',
            multishot: 'Wielostrzał',
            quick_charge: 'Szybkie Ładowanie',
            piercing: 'Przeszycie'
        }
    },
    nl: {
        ui: {
            headerTitle: '⚔️ Minecraft Commando Generator',
            headerSubtitle: 'Maak eenvoudig item commando\'s',
            itemSelectLabel: 'Selecteer Item',
            quantityInputLabel: 'Aantal',
            enchantmentsLabel: 'Betoveringen',
            addEnchantBtn: '+ Voeg Betovering Toe',
            silentModeText: '🔇 Stille Modus',
            silentModeHint: 'Commando verschijnt niet in chat',
            outputTitle: 'Gegenereerd Commando',
            copyBtn: '📋 Kopiëren',
            commandPlaceholder: 'Commando verschijnt hier...',
            selectItemPlaceholder: 'Kies een item...',
            selectEnchantPlaceholder: 'Kies betovering...',
            enchantLevelPlaceholder: 'Niveau',
            maxLevelInfo: 'Max Niveau:',
            copied: '✓ Gekopieerd!',
            copyError: 'Kopiëren mislukt.',
            opItemsBtn: '⚡ OP Items (Meester Set)',
            opItemsTitle: '⚡ Ultieme Item Set',
            copyCommand: 'Kopiëren',
            commandDescription: 'Beschrijving:',
            versionSelectLabel: 'Spelversie',
            versionOld: '1.20.4 en lager',
            versionNew: '1.20.5 en hoger',
            displaySettingsTitle: 'Weergave-instellingen',
            customNameLabel: 'Itemnaam',
            customNamePlaceholder: 'Bijv: Drakendoder',
            boldLabel: 'Vet',
            italicLabel: 'Cursief',
            loreLabel: 'Lore (Beschrijving)',
            lorePlaceholder: 'Beschrijvingsregels...',
            presetsTitle: 'Presets',
            presetPlaceholder: 'Preset Naam...',
            saveBtn: 'Opslaan',
            loadBtn: 'Laden',
            deleteBtn: 'Verwijderen',
            targetSelectLabel: 'Doelwit',
            targetPlaceholder: 'Spelersnaam',
            unbreakableLabel: 'Onverwoestbaar',
            searchPlaceholder: '🔍 Zoeken...',
            selectPresetPlaceholder: 'Selecteer preset...'
        },
        content: {
            contentTitle: 'Wat is Minecraft Commando Generator?',
            contentDesc: 'Met deze tool kunnen Minecraft-spelers binnen enkele seconden complexe <strong>/give</strong> commando\'s genereren. Geen gedoe meer met lange codes in commandoblokken of chat. Of je nu een netherite zwaard maakt voor versie <strong>1.21</strong> of diamanten sets voor <strong>1.8</strong>; MC AI Commando Generator beantwoordt aan al je behoeften.',
            featuresTitle: 'Kenmerken',
            feature1: '✨ <strong>Aangepaste Naam en Lore:</strong> Voeg kleurrijke namen en beschrijvingen toe aan je items.',
            feature2: '🔥 <strong>Onbeperkte Betoveringen:</strong> Ga voorbij de vanilla limieten zoals Scherpte 1000, Efficiëntie 32767.',
            feature3: '🛡️ <strong>Onverwoestbaar:</strong> Maak "Onverwoestbare" items die nooit breken.',
            feature4: '⚡ <strong>OP Item Sets:</strong> Krijg de sterkste items met één klik met "Meester Set".',
            feature5: '🌍 <strong>Meertalige Ondersteuning:</strong> Gebruik in het Turks, Engels, Duits en 10+ talen.',
            guideTitle: 'Hoe maak je een OP Zwaard in Minecraft?',
            guideStep1: '1. <strong>Selecteer Item:</strong> Kies "Diamanten Zwaard" of "Netherite Zwaard" uit de lijst.',
            guideStep2: '2. <strong>Voeg Betovering Toe:</strong> Selecteer "Scherpte" (Sharpness) en zet het niveau op 255 (of hoger).',
            guideStep3: '3. <strong>Maak Onverwoestbaar:</strong> Vink het vakje "Onverwoestbaar" aan.',
            guideStep4: '4. <strong>Kopiëren:</strong> Kopieer het gegenereerde commando en plak het in een commandoblok in het spel.'
        },
        targets: {
            s: '@s (Zichzelf)',
            p: '@p (Dichtstbijzijnde)',
            a: '@a (Alle)',
            e: '@e (Entiteiten)',
            r: '@r (Willekeurig)',
            custom: 'Aangepast...'
        },
        colors: {
            default: 'Standaard',
            white: 'Wit',
            red: 'Rood',
            dark_red: 'Donkerrood',
            gold: 'Goud',
            green: 'Groen',
            dark_green: 'Donkergroen',
            aqua: 'Aqua',
            dark_aqua: 'Donkeraqua',
            blue: 'Blauw',
            dark_blue: 'Donkerblauw',
            light_purple: 'Lichtpaars',
            dark_purple: 'Paars',
            yellow: 'Geel',
            gray: 'Grijs',
            dark_gray: 'Donkergrijs',
            black: 'Zwart'
        },
        itemGroups: {
            weapons: 'Wapens',
            tools: 'Gereedschap',
            armor: 'Harnas',
            special: 'Speciale Items'
        },
        items: {
            diamond_sword: 'Diamanten Zwaard',
            iron_sword: 'IJzeren Zwaard',
            golden_sword: 'Gouden Zwaard',
            stone_sword: 'Stenen Zwaard',
            wooden_sword: 'Houten Zwaard',
            bow: 'Boog',
            crossbow: 'Kruisboog',
            trident: 'Drietand',
            diamond_pickaxe: 'Diamanten Houweel',
            iron_pickaxe: 'IJzeren Houweel',
            diamond_axe: 'Diamanten Bijl',
            diamond_shovel: 'Diamanten Schep',
            diamond_hoe: 'Diamanten Schoffel',
            diamond_helmet: 'Diamanten Helm',
            diamond_chestplate: 'Diamanten Borstplaat',
            diamond_leggings: 'Diamanten Broek',
            diamond_boots: 'Diamanten Laarzen',
            golden_apple: 'Gouden Appel',
            enchanted_golden_apple: 'Betoverde Gouden Appel',
            ender_pearl: 'Enderparel',
            diamond: 'Diamant',
            emerald: 'Smaragd',
            netherite_ingot: 'Netherietstaaf'
        },
        enchantments: {
            sharpness: 'Scherpte',
            smite: 'Kastijding',
            bane_of_arthropods: 'Nemesis der Geleedpotigen',
            knockback: 'Terugslag',
            fire_aspect: 'Vuuraspect',
            looting: 'Plundering',
            sweeping_edge: 'Zwiepende Rand',
            unbreaking: 'Duurzaamheid',
            mending: 'Herstel',
            efficiency: 'Efficiëntie',
            silk_touch: 'Zijdestreling',
            fortune: 'Geluk',
            power: 'Kracht',
            punch: 'Terugslag',
            flame: 'Vlam',
            infinity: 'Oneindigheid',
            protection: 'Bescherming',
            fire_protection: 'Vuurbescherming',
            feather_falling: 'Vederlicht',
            blast_protection: 'Explosionsbescherming',
            projectile_protection: 'Projectielbescherming',
            respiration: 'Ademhaling',
            aqua_affinity: 'Wateraffiniteit',
            thorns: 'Doorns',
            depth_strider: 'Diepteloper',
            frost_walker: 'Vorstloper',
            soul_speed: 'Zielensnelheid',
            swift_sneak: 'Snel Sluipen',
            loyalty: 'Loyaliteit',
            impaling: 'Spietsen',
            riptide: 'Draaikolk',
            channeling: 'Geleiding',
            multishot: 'Meervoudig Schot',
            quick_charge: 'Snel Laden',
            piercing: 'Doorboring'
        }
    },
    sv: {
        ui: {
            headerTitle: '⚔️ Minecraft Kommandogenerator',
            headerSubtitle: 'Skapa objektkommandon enkelt',
            itemSelectLabel: 'Välj Objekt',
            quantityInputLabel: 'Antal',
            enchantmentsLabel: 'Förtrollningar',
            addEnchantBtn: '+ Lägg till Förtrollning',
            silentModeText: '🔇 Tyst Läge',
            silentModeHint: 'Kommandot syns inte i chatten',
            outputTitle: 'Genererat Kommando',
            copyBtn: '📋 Kopiera',
            commandPlaceholder: 'Kommandot visas här...',
            selectItemPlaceholder: 'Välj ett objekt...',
            selectEnchantPlaceholder: 'Välj förtrollning...',
            enchantLevelPlaceholder: 'Nivå',
            maxLevelInfo: 'Max Nivå:',
            copied: '✓ Kopierat!',
            copyError: 'Kopiering misslyckades.',
            opItemsBtn: '⚡ OP Objekt (Mästarset)',
            opItemsTitle: '⚡ Ultimat Objektset',
            copyCommand: 'Kopiera',
            commandDescription: 'Beskrivning:',
            versionSelectLabel: 'Spelversion',
            versionOld: '1.20.4 och lägre',
            versionNew: '1.20.5 och högre',
            displaySettingsTitle: 'Visningsinställningar',
            customNameLabel: 'Föremålsnamn',
            customNamePlaceholder: 'T.ex: Drakdödare',
            boldLabel: 'Fet',
            italicLabel: 'Kursiv',
            loreLabel: 'Lore (Beskrivning)',
            lorePlaceholder: 'Beskrivningsrader...',
            presetsTitle: 'Förinställningar',
            presetPlaceholder: 'Förinställningsnamn...',
            saveBtn: 'Spara',
            loadBtn: 'Ladda',
            deleteBtn: 'Ta bort',
            targetSelectLabel: 'Mål',
            targetPlaceholder: 'Spelarnamn',
            unbreakableLabel: 'Oförstörbar',
            searchPlaceholder: '🔍 Sök...',
            selectPresetPlaceholder: 'Välj förinställning...'
        },
        content: {
            contentTitle: 'Vad är Minecraft Kommandogenerator?',
            contentDesc: 'Detta verktyg låter Minecraft-spelare skapa komplexa <strong>/give</strong>-kommandon på några sekunder. Inget mer kämpande med långa koder i kommandblock eller chatt. Oavsett om du gör ett netherite-svärd för version <strong>1.21</strong> eller diamantset för <strong>1.8</strong>; MC AI Kommandogenerator svarar på alla dina behov.',
            featuresTitle: 'Funktioner',
            feature1: '✨ <strong>Anpassat Namn och Lore:</strong> Lägg till färgglada namn och beskrivningar till dina föremål.',
            feature2: '🔥 <strong>Obegränsade Förtrollningar:</strong> Gå bortom vaniljgränser som Skärpa 1000, Effektivitet 32767.',
            feature3: '🛡️ <strong>Oförstörbar:</strong> Skapa "Oförstörbara" föremål som aldrig går sönder.',
            feature4: '⚡ <strong>OP Föremålsset:</strong> Få de starkaste föremålen med ett klick med "Mästarset".',
            feature5: '🌍 <strong>Flerspråksstöd:</strong> Använd på Turkiska, Engelska, Tyska och 10+ språk.',
            guideTitle: 'Hur man gör ett OP-svärd i Minecraft?',
            guideStep1: '1. <strong>Välj Föremål:</strong> Välj "Diamantsvärd" eller "Netherite-svärd" från listan.',
            guideStep2: '2. <strong>Lägg till Förtrollning:</strong> Välj "Skärpa" (Sharpness) och sätt nivån till 255 (eller högre).',
            guideStep3: '3. <strong>Gör Oförstörbar:</strong> Kryssa i rutan "Oförstörbar".',
            guideStep4: '4. <strong>Kopiera:</strong> Kopiera det genererade kommandot och klistra in det i ett kommandblock i spelet.'
        },
        targets: {
            s: '@s (Själv)',
            p: '@p (Närmaste)',
            a: '@a (Alla)',
            e: '@e (Entiteter)',
            r: '@r (Slumpmässig)',
            custom: 'Anpassad...'
        },
        colors: {
            default: 'Standard',
            white: 'Vit',
            red: 'Röd',
            dark_red: 'Mörkröd',
            gold: 'Guld',
            green: 'Grön',
            dark_green: 'Mörkgrön',
            aqua: 'Turkos',
            dark_aqua: 'Mörkturkos',
            blue: 'Blå',
            dark_blue: 'Mörkblå',
            light_purple: 'Ljuslila',
            dark_purple: 'Lila',
            yellow: 'Gul',
            gray: 'Grå',
            dark_gray: 'Mörkgrå',
            black: 'Svart'
        },
        itemGroups: {
            weapons: 'Vapen',
            tools: 'Verktyg',
            armor: 'Rustning',
            special: 'Specialobjekt'
        },
        items: {
            diamond_sword: 'Diamantsvärd',
            iron_sword: 'Järnsvärd',
            golden_sword: 'Guldsvärd',
            stone_sword: 'Stensvärd',
            wooden_sword: 'Träsvärd',
            bow: 'Pilbåge',
            crossbow: 'Armborst',
            trident: 'Treudd',
            diamond_pickaxe: 'Diamanthacka',
            iron_pickaxe: 'Järnhacka',
            diamond_axe: 'Diamantyxa',
            diamond_shovel: 'Diamantspade',
            diamond_hoe: 'Diamantflishacka',
            diamond_helmet: 'Diamanthjälm',
            diamond_chestplate: 'Diamantbröstplatta',
            diamond_leggings: 'Diamantbyxor',
            diamond_boots: 'Diamantstövlar',
            golden_apple: 'Guldäpple',
            enchanted_golden_apple: 'Förtrollat Guldäpple',
            ender_pearl: 'Enderpärla',
            diamond: 'Diamant',
            emerald: 'Smaragd',
            netherite_ingot: 'Netherite Tacka'
        },
        enchantments: {
            sharpness: 'Skärpa',
            smite: 'Smite',
            bane_of_arthropods: 'Leddjurens Bane',
            knockback: 'Knuff',
            fire_aspect: 'Eldaspekt',
            looting: 'Plundring',
            sweeping_edge: 'Svepande Egg',
            unbreaking: 'Oförstörbarhet',
            mending: 'Lagning',
            efficiency: 'Effektivitet',
            silk_touch: 'Silkeslena',
            fortune: 'Lycka',
            power: 'Kraft',
            punch: 'Slag',
            flame: 'Flamma',
            infinity: 'Oändlighet',
            protection: 'Beskydd',
            fire_protection: 'Eldskydd',
            feather_falling: 'Fjädeterfall',
            blast_protection: 'Explosionsskydd',
            projectile_protection: 'Projektilskydd',
            respiration: 'Andning',
            aqua_affinity: 'Vattenvana',
            thorns: 'Törne',
            depth_strider: 'Djupgående',
            frost_walker: 'Frostvandrare',
            soul_speed: 'Själahastighet',
            swift_sneak: 'Snabb Smygning',
            loyalty: 'Lojalitet',
            impaling: 'Spetsning',
            riptide: 'Motström',
            channeling: 'Kanalisering',
            multishot: 'Multishot',
            quick_charge: 'Snabbladdning',
            piercing: 'Genomträngning'
        }
    },
    el: {
        ui: {
            headerTitle: '⚔️ Γεννήτρια Εντολών Minecraft',
            headerSubtitle: 'Δημιουργήστε εντολές αντικειμένων εύκολα',
            itemSelectLabel: 'Επιλογή Αντικειμένου',
            quantityInputLabel: 'Ποσότητα',
            enchantmentsLabel: 'Μαγείες',
            addEnchantBtn: '+ Προσθήκη Μαγείας',
            silentModeText: '🔇 Αθόρυβη Λειτουργία',
            silentModeHint: 'Η εντολή δεν θα εμφανιστεί στο chat',
            outputTitle: 'Παραγόμενη Εντολή',
            copyBtn: '📋 Αντιγραφή',
            commandPlaceholder: 'Η εντολή θα εμφανιστεί εδώ...',
            selectItemPlaceholder: 'Επιλέξτε ένα αντικείμενο...',
            selectEnchantPlaceholder: 'Επιλέξτε μαγεία...',
            enchantLevelPlaceholder: 'Επίπεδο',
            maxLevelInfo: 'Μέγιστο Επίπεδο:',
            copied: '✓ Αντιγράφηκε!',
            copyError: 'Αποτυχία αντιγραφής.',
            opItemsBtn: '⚡ Αντικείμενα OP (Σετ Master)',
            opItemsTitle: '⚡ Απόλυτο Σετ Αντικειμένων',
            copyCommand: 'Αντιγραφή',
            commandDescription: 'Περιγραφή:',
            versionSelectLabel: 'Έκδοση Παιχνιδιού',
            versionOld: '1.20.4 και κάτω',
            versionNew: '1.20.5 και άνω',
            displaySettingsTitle: 'Ρυθμίσεις Προβολής',
            customNameLabel: 'Όνομα Αντικειμένου',
            customNamePlaceholder: 'Π.χ: Δρακοκτόνος',
            boldLabel: 'Έντονα',
            italicLabel: 'Πλάγια',
            loreLabel: 'Lore (Περιγραφή)',
            lorePlaceholder: 'Γραμμές περιγραφής...',
            presetsTitle: 'Προεπιλογές',
            presetPlaceholder: 'Όνομα Προεπιλογής...',
            saveBtn: 'Αποθήκευση',
            loadBtn: 'Φόρτωση',
            deleteBtn: 'Διαγραφή',
            targetSelectLabel: 'Στόχος',
            targetPlaceholder: 'Όνομα Παίκτη',
            unbreakableLabel: 'Άθραυστο',
            searchPlaceholder: '🔍 Αναζήτηση...',
            selectPresetPlaceholder: 'Επιλογή προεπιλογής...'
        },
        content: {
            contentTitle: 'Τι είναι η Γεννήτρια Εντολών Minecraft;',
            contentDesc: 'Αυτό το εργαλείο επιτρέπει στους παίκτες του Minecraft να δημιουργούν περίπλοκες εντολές <strong>/give</strong> σε δευτερόλεπτα. Δεν χρειάζεται πλέον να παλεύετε με μεγάλους κωδικούς σε μπλοκ εντολών ή στο chat. Είτε φτιάχνετε ένα σπαθί netherite για την έκδοση <strong>1.21</strong> είτε σετ διαμαντιών για την <strong>1.8</strong>; Η Γεννήτρια Εντολών MC AI καλύπτει όλες τις ανάγκες σας.',
            featuresTitle: 'Χαρακτηριστικά',
            feature1: '✨ <strong>Προσαρμοσμένο Όνομα και Lore:</strong> Προσθέστε πολύχρωμα ονόματα και περιγραφές στα αντικείμενά σας.',
            feature2: '🔥 <strong>Απεριόριστες Μαγείες:</strong> Ξεπεράστε τα όρια του vanilla όπως Κοφτερότητα 1000, Αποδοτικότητα 32767.',
            feature3: '🛡️ <strong>Άθραυστο:</strong> Φτιάξτε "Άθραυστα" αντικείμενα που δεν σπάνε ποτέ.',
            feature4: '⚡ <strong>Σετ Αντικειμένων OP:</strong> Αποκτήστε τα ισχυρότερα αντικείμενα με ένα κλικ χρησιμοποιώντας το "Master Set".',
            feature5: '🌍 <strong>Υποστήριξη Πολλαπλών Γλωσσών:</strong> Χρησιμοποιήστε το σε Τουρκικά, Αγγλικά, Γερμανικά και 10+ γλώσσες.',
            guideTitle: 'Πώς να φτιάξετε ένα OP Σπαθί στο Minecraft?',
            guideStep1: '1. <strong>Επιλογή Αντικειμένου:</strong> Επιλέξτε "Διαμαντένιο Σπαθί" ή "Σπαθί Netherite" από τη λίστα.',
            guideStep2: '2. <strong>Προσθήκη Μαγείας:</strong> Επιλέξτε "Κοφτερότητα" (Sharpness) και ορίστε το επίπεδο στο 255 (ή υψηλότερα).',
            guideStep3: '3. <strong>Κάντε το Άθραυστο:</strong> Επιλέξτε το κουτί "Άθραυστο".',
            guideStep4: '4. <strong>Αντιγραφή:</strong> Αντιγράψτε την παραγόμενη εντολή και επικολλήστε την σε ένα μπλοκ εντολών στο παιχνίδι.'
        },
        targets: {
            s: '@s (Εαυτός)',
            p: '@p (Κοντινότερος)',
            a: '@a (Όλοι)',
            e: '@e (Οντότητες)',
            r: '@r (Τυχαίος)',
            custom: 'Προσαρμοσμένο...'
        },
        colors: {
            default: 'Προεπιλογή',
            white: 'Λευκό',
            red: 'Κόκκινο',
            dark_red: 'Σκούρο Κόκκινο',
            gold: 'Χρυσό',
            green: 'Πράσινο',
            dark_green: 'Σκούρο Πράσινο',
            aqua: 'Γαλάζιο',
            dark_aqua: 'Σκούρο Γαλάζιο',
            blue: 'Μπλε',
            dark_blue: 'Σκούρο Μπλε',
            light_purple: 'Ανοιχτό Μωβ',
            dark_purple: 'Μωβ',
            yellow: 'Κίτρινο',
            gray: 'Γκρι',
            dark_gray: 'Σκούρο Γκρι',
            black: 'Μαύρο'
        },
        itemGroups: {
            weapons: 'Όπλα',
            tools: 'Εργαλεία',
            armor: 'Πανοπλία',
            special: 'Ειδικά Αντικείμενα'
        },
        items: {
            diamond_sword: 'Διαμαντένιο Σπαθί',
            iron_sword: 'Σιδερένιο Σπαθί',
            golden_sword: 'Χρυσό Σπαθί',
            stone_sword: 'Πέτρινο Σπαθί',
            wooden_sword: 'Ξύλινο Σπαθί',
            bow: 'Τόξο',
            crossbow: 'Βάλλιστρα',
            trident: 'Τρίαινα',
            diamond_pickaxe: 'Διαμαντένια Αξίνα',
            iron_pickaxe: 'Σιδερένια Αξίνα',
            diamond_axe: 'Διαμαντένιο Τσεκούρι',
            diamond_shovel: 'Διαμαντένιο Φτυάρι',
            diamond_hoe: 'Διαμαντένια Τσάπα',
            diamond_helmet: 'Διαμαντένιο Κράνος',
            diamond_chestplate: 'Διαμαντένιος Θώρακας',
            diamond_leggings: 'Διαμαντένιες Περικνημίδες',
            diamond_boots: 'Διαμαντένιες Μπότες',
            golden_apple: 'Χρυσό Μήλο',
            enchanted_golden_apple: 'Μαγεμένο Χρυσό Μήλο',
            ender_pearl: 'Μαργαριτάρι του Ender',
            diamond: 'Διαμάντι',
            emerald: 'Σμαράγδι',
            netherite_ingot: 'Ράβδος Netherite'
        },
        enchantments: {
            sharpness: 'Κοφτερότητα',
            smite: 'Πάταξη',
            bane_of_arthropods: 'Όλεθρος των Αρθρόποδων',
            knockback: 'Απώθηση',
            fire_aspect: 'Όψη Φωτιάς',
            looting: 'Λεηλασία',
            sweeping_edge: 'Σαρωτική Αιχμή',
            unbreaking: 'Ανθεκτικότητα',
            mending: 'Επισκευή',
            efficiency: 'Αποδοτικότητα',
            silk_touch: 'Μεταξένιο Άγγιγμα',
            fortune: 'Τύχη',
            power: 'Δύναμη',
            punch: 'Γροθιά',
            flame: 'Φλόγα',
            infinity: 'Απειρο',
            protection: 'Προστασία',
            fire_protection: 'Προστασία από Φωτιά',
            feather_falling: 'Πτώση Πούπουλου',
            blast_protection: 'Προστασία από Εκρήξεις',
            projectile_protection: 'Προστασία από Βλήματα',
            respiration: 'Αναπνοή',
            aqua_affinity: 'Υδάτινη Συγγένεια',
            thorns: 'Αγκάθια',
            depth_strider: 'Βηματισμός Βάθους',
            frost_walker: 'Παγοδρόμος',
            soul_speed: 'Ταχύτητα Ψυχής',
            swift_sneak: 'Γρήγορη Μυστικότητα',
            loyalty: 'Πιστότητα',
            impaling: 'Σούβλισμα',
            riptide: 'Παλίρροια',
            channeling: 'Διοχέτευση',
            multishot: 'Πολυβολή',
            quick_charge: 'Γρήγορη Φόρτιση',
            piercing: 'Διάτρηση'
        }
    }
};

// Current language (default: Turkish)
let currentLanguage = 'tr';

// Enchantment ID mapping
const enchantmentIds = {
    sharpness: 'minecraft:sharpness',
    smite: 'minecraft:smite',
    bane_of_arthropods: 'minecraft:bane_of_arthropods',
    knockback: 'minecraft:knockback',
    fire_aspect: 'minecraft:fire_aspect',
    looting: 'minecraft:looting',
    sweeping_edge: 'minecraft:sweeping_edge',
    unbreaking: 'minecraft:unbreaking',
    mending: 'minecraft:mending',
    efficiency: 'minecraft:efficiency',
    silk_touch: 'minecraft:silk_touch',
    fortune: 'minecraft:fortune',
    power: 'minecraft:power',
    punch: 'minecraft:punch',
    flame: 'minecraft:flame',
    infinity: 'minecraft:infinity',
    protection: 'minecraft:protection',
    fire_protection: 'minecraft:fire_protection',
    feather_falling: 'minecraft:feather_falling',
    blast_protection: 'minecraft:blast_protection',
    projectile_protection: 'minecraft:projectile_protection',
    respiration: 'minecraft:respiration',
    aqua_affinity: 'minecraft:aqua_affinity',
    thorns: 'minecraft:thorns',
    depth_strider: 'minecraft:depth_strider',
    frost_walker: 'minecraft:frost_walker',
    soul_speed: 'minecraft:soul_speed',
    swift_sneak: 'minecraft:swift_sneak',
    loyalty: 'minecraft:loyalty',
    impaling: 'minecraft:impaling',
    riptide: 'minecraft:riptide',
    channeling: 'minecraft:channeling',
    multishot: 'minecraft:multishot',
    quick_charge: 'minecraft:quick_charge',
    piercing: 'minecraft:piercing'
};

// Maximum level for each enchantment
const enchantmentMaxLevels = {
    sharpness: 5,
    smite: 5,
    bane_of_arthropods: 5,
    knockback: 2,
    fire_aspect: 2,
    looting: 3,
    sweeping_edge: 3,
    unbreaking: 3,
    mending: 1,
    efficiency: 5,
    silk_touch: 1,
    fortune: 3,
    power: 5,
    punch: 2,
    flame: 1,
    infinity: 1,
    protection: 4,
    fire_protection: 4,
    feather_falling: 4,
    blast_protection: 4,
    projectile_protection: 4,
    respiration: 3,
    aqua_affinity: 1,
    thorns: 3,
    depth_strider: 3,
    frost_walker: 2,
    soul_speed: 3,
    swift_sneak: 3,
    loyalty: 3,
    impaling: 5,
    riptide: 3,
    channeling: 1,
    multishot: 1,
    quick_charge: 3,
    piercing: 4
};

// Get maximum level for an enchantment
function getEnchantmentMaxLevel(enchantKey) {
    return enchantmentMaxLevels[enchantKey] || 10;
}

// Get enchantment display name based on current language
function getEnchantmentName(enchantKey) {
    return translations[currentLanguage].enchantments[enchantKey] || enchantKey;
}

// Get item display name based on current language
function getItemName(itemKey) {
    return translations[currentLanguage].items[itemKey] || itemKey;
}

// Item type to enchantment compatibility mapping
const itemEnchantmentCompatibility = {
    // Kılıçlar
    sword: ['sharpness', 'smite', 'bane_of_arthropods', 'knockback', 'fire_aspect', 'looting', 'sweeping_edge', 'unbreaking', 'mending'],

    // Kazmalar
    pickaxe: ['efficiency', 'silk_touch', 'fortune', 'unbreaking', 'mending'],

    // Baltalar
    axe: ['efficiency', 'silk_touch', 'fortune', 'sharpness', 'smite', 'bane_of_arthropods', 'unbreaking', 'mending'],

    // Kürekler
    shovel: ['efficiency', 'silk_touch', 'fortune', 'unbreaking', 'mending'],

    // Çapalar
    hoe: ['efficiency', 'silk_touch', 'fortune', 'unbreaking', 'mending'],

    // Yaylar
    bow: ['power', 'punch', 'flame', 'infinity', 'unbreaking', 'mending'],

    // Arbaletler
    crossbow: ['multishot', 'quick_charge', 'piercing', 'unbreaking', 'mending'],

    // Mızraklar
    trident: ['loyalty', 'impaling', 'riptide', 'channeling', 'unbreaking', 'mending'],

    // Kasklar
    helmet: ['protection', 'fire_protection', 'blast_protection', 'projectile_protection', 'respiration', 'aqua_affinity', 'thorns', 'unbreaking', 'mending'],

    // Göğüslükler
    chestplate: ['protection', 'fire_protection', 'blast_protection', 'projectile_protection', 'thorns', 'unbreaking', 'mending'],

    // Pantolonlar
    leggings: ['protection', 'fire_protection', 'blast_protection', 'projectile_protection', 'thorns', 'swift_sneak', 'unbreaking', 'mending'],

    // Botlar
    boots: ['protection', 'fire_protection', 'blast_protection', 'projectile_protection', 'feather_falling', 'depth_strider', 'frost_walker', 'soul_speed', 'thorns', 'unbreaking', 'mending'],

    // Özel eşyalar (büyü kabul etmez)
    other: []
};

// Get item type from item ID
function getItemType(itemId) {
    if (!itemId) return 'other';

    if (itemId.includes('sword')) return 'sword';
    if (itemId.includes('pickaxe')) return 'pickaxe';
    if (itemId.includes('axe')) return 'axe';
    if (itemId.includes('shovel')) return 'shovel';
    if (itemId.includes('hoe')) return 'hoe';
    if (itemId === 'bow') return 'bow';
    if (itemId === 'crossbow') return 'crossbow';
    if (itemId === 'trident') return 'trident';
    if (itemId.includes('helmet')) return 'helmet';
    if (itemId.includes('chestplate')) return 'chestplate';
    if (itemId.includes('leggings')) return 'leggings';
    if (itemId.includes('boots')) return 'boots';

    return 'other';
}

// Get available enchantments for an item
function getAvailableEnchantments(itemId) {
    const itemType = getItemType(itemId);
    return itemEnchantmentCompatibility[itemType] || [];
}

// Generate enchantment options HTML
function generateEnchantmentOptions(availableEnchantments, selectedValue = '') {
    const placeholder = translations[currentLanguage].ui.selectEnchantPlaceholder;
    let html = `<option value="">${placeholder}</option>`;

    availableEnchantments.forEach(enchantKey => {
        const name = getEnchantmentName(enchantKey);
        const selected = selectedValue === enchantKey ? 'selected' : '';
        html += `<option value="${enchantKey}" ${selected}>${name}</option>`;
    });

    return html;
}

// Generate item options HTML with optional filter
function generateItemOptions(filterText = '') {
    const placeholder = translations[currentLanguage].ui.selectItemPlaceholder;
    const groups = translations[currentLanguage].itemGroups;
    const filter = filterText.toLowerCase().trim();

    let html = `<option value="">${placeholder}</option>`;

    // Helper to generate option if matches
    const createOption = (value) => {
        const name = getItemName(value);
        if (!filter || name.toLowerCase().includes(filter) || value.includes(filter)) {
            return `<option value="${value}">${name}</option>`;
        }
        return '';
    };

    // Helper to add group if it has items
    const addGroup = (label, items) => {
        let groupHtml = '';
        items.forEach(item => {
            groupHtml += createOption(item);
        });

        if (groupHtml) {
            html += `<optgroup label="${label}">`;
            html += groupHtml;
            html += `</optgroup>`;
        }
    };

    // Weapons
    addGroup(groups.weapons, [
        'diamond_sword', 'iron_sword', 'golden_sword', 'stone_sword', 'wooden_sword',
        'bow', 'crossbow', 'trident'
    ]);

    // Tools
    addGroup(groups.tools, [
        'diamond_pickaxe', 'iron_pickaxe', 'diamond_axe', 'diamond_shovel', 'diamond_hoe'
    ]);

    // Armor
    addGroup(groups.armor, [
        'diamond_helmet', 'diamond_chestplate', 'diamond_leggings', 'diamond_boots'
    ]);

    // Special Items
    addGroup(groups.special, [
        'golden_apple', 'enchanted_golden_apple', 'ender_pearl', 'diamond',
        'emerald', 'netherite_ingot'
    ]);

    return html;
}

// Update UI text based on current language
function updateUIText() {
    const t = translations[currentLanguage].ui;

    // Helper for safe text update
    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || '';
    };

    // Helper for safe placeholder update
    const safeSetPlaceholder = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = text || '';
    };

    // Helper for safe HTML update
    const safeSetHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html || '';
    };

    // Update Content Section (SEO Text)
    const content = translations[currentLanguage].content || translations['en'].content;
    if (content) {
        safeSetText('contentTitle', content.contentTitle);
        safeSetHTML('contentDesc', content.contentDesc);
        safeSetText('featuresTitle', content.featuresTitle);
        safeSetHTML('feature1', content.feature1);
        safeSetHTML('feature2', content.feature2);
        safeSetHTML('feature3', content.feature3);
        safeSetHTML('feature4', content.feature4);
        safeSetHTML('feature5', content.feature5);
        safeSetText('guideTitle', content.guideTitle);
        safeSetHTML('guideStep1', content.guideStep1);
        safeSetHTML('guideStep2', content.guideStep2);
        safeSetHTML('guideStep3', content.guideStep3);
        safeSetHTML('guideStep4', content.guideStep4);
    }

    safeSetText('headerTitle', t.headerTitle);
    safeSetText('headerSubtitle', t.headerSubtitle);
    safeSetText('itemSelectLabel', t.itemSelectLabel);
    safeSetText('versionSelectLabel', t.versionSelectLabel);

    // Update version select options
    const versionSelect = document.getElementById('versionSelect');
    if (versionSelect) {
        const currentVersion = versionSelect.value;
        versionSelect.innerHTML = `
            <option value="old">${t.versionOld || '1.20.4'}</option>
            <option value="new">${t.versionNew || '1.20.5+'}</option>
        `;
        versionSelect.value = currentVersion || 'old';
    }

    safeSetText('quantityInputLabel', t.quantityInputLabel);
    safeSetText('targetSelectLabel', t.targetSelectLabel || 'Target');
    safeSetPlaceholder('targetName', t.targetPlaceholder || 'Player Name');
    safeSetText('unbreakableLabel', t.unbreakableLabel || 'Unbreakable');

    // Search Placeholder
    safeSetPlaceholder('itemSearch', t.searchPlaceholder || '🔍 Search...');

    // Display Settings
    safeSetText('displaySettingsTitle', t.displaySettingsTitle || 'Display Settings');
    safeSetText('customNameLabel', t.customNameLabel || 'Item Name');
    safeSetPlaceholder('customName', t.customNamePlaceholder || 'Ex: Dragon Slayer');
    safeSetText('boldLabel', t.boldLabel || 'Bold');
    safeSetText('italicLabel', t.italicLabel || 'Italic');
    safeSetText('customLoreLabel', t.loreLabel || 'Lore');
    safeSetPlaceholder('customLore', t.lorePlaceholder || 'Lore lines...');

    // Presets
    safeSetText('presetsTitle', t.presetsTitle || 'Presets');
    safeSetPlaceholder('presetName', t.presetPlaceholder || 'Preset Name...');

    // Dynamic Button Texts
    safeSetText('savePresetBtn', t.saveBtn || 'Save');
    safeSetText('loadPresetBtn', t.loadBtn || 'Load');
    safeSetText('deletePresetBtn', t.deleteBtn || 'Delete');

    // Existing Select Placeholder Update
    const presetSelect = document.getElementById('presetSelect');
    if (presetSelect && presetSelect.options.length > 0) {
        if (presetSelect.options[0].value === "") {
            presetSelect.options[0].textContent = t.selectPresetPlaceholder || 'Select a preset...';
        }
    }

    safeSetText('enchantmentsLabel', t.enchantmentsLabel);
    safeSetText('addEnchantBtn', t.addEnchantBtn);
    safeSetText('silentModeText', t.silentModeText);
    safeSetText('silentModeHint', t.silentModeHint);
    safeSetText('outputTitle', t.outputTitle);
    safeSetText('copyBtn', t.copyBtn);
    safeSetPlaceholder('commandOutput', t.commandPlaceholder);

    // Update all enchant-level placeholders
    document.querySelectorAll('.enchant-level').forEach(input => {
        input.placeholder = t.enchantLevelPlaceholder || 'Level';
    });

    // Update OP Items button
    safeSetText('opItemsBtn', t.opItemsBtn);
    safeSetText('opItemsTitle', t.opItemsTitle);

    // Update item select
    const itemSelect = document.getElementById('itemSelect');
    if (itemSelect) {
        const currentItem = itemSelect.value;
        itemSelect.innerHTML = generateItemOptions();
        if (currentItem) {
            itemSelect.value = currentItem;
        }
    }

    // Update enchantment dropdowns
    updateEnchantmentDropdowns();

    // Re-initialize enchantment listeners after UI update
    initializeEnchantmentListeners();

    // Update OP Items if visible
    const opContainer = document.getElementById('opItemsContainer');
    if (opContainer && opContainer.style.display === 'block') {
        showOPItems();
    }

    // Helper to update specific dropdown options
    const updateSelectOptions = (selectId, translationKey, prefix = '') => {
        const select = document.getElementById(selectId);
        if (!select) return;

        const data = translations[currentLanguage][translationKey] || translations['en'][translationKey];
        if (!data) return;

        Array.from(select.options).forEach(option => {
            const val = option.value;
            // Handle targets specifically because values are @s, @p etc.
            // Or handle based on value mapping
            let key = val;
            if (translationKey === 'targets') {
                if (val === '@s') key = 's';
                else if (val === '@p') key = 'p';
                else if (val === '@a') key = 'a';
                else if (val === '@e') key = 'e';
                else if (val === '@r') key = 'r';
            }

            if (data[key]) {
                option.textContent = data[key];
            } else if (val === "" && data['default']) {
                option.textContent = data['default'];
            }
        });
    };

    updateSelectOptions('targetSelect', 'targets');
    updateSelectOptions('nameColor', 'colors');
}

// Update enchantment level input based on selected enchantment
function updateEnchantmentLevel(enchantSelect) {
    if (!enchantSelect) return;

    const enchantKey = enchantSelect.value;
    const enchantmentItem = enchantSelect.closest('.enchantment-item');

    if (!enchantmentItem) return;

    const levelInput = enchantmentItem.querySelector('.enchant-level');
    const maxLevelInfo = enchantmentItem.querySelector('.max-level-info');

    if (!levelInput) return;

    if (enchantKey) {
        const maxLevel = getEnchantmentMaxLevel(enchantKey);
        levelInput.max = maxLevel;

        // If current value exceeds max, set it to max
        if (parseInt(levelInput.value) > maxLevel) {
            levelInput.value = maxLevel;
        }

        // Show max level info if element exists
        if (maxLevelInfo) {
            const t = translations[currentLanguage].ui;
            maxLevelInfo.textContent = `${t.maxLevelInfo} ${maxLevel}`;
            maxLevelInfo.style.display = 'block';
        }
    } else {
        // Hide max level info if no enchantment selected
        if (maxLevelInfo) {
            maxLevelInfo.style.display = 'none';
        }
        levelInput.max = 10;
    }

    updateCommand();
}

// Validate and update enchantment level input
function validateEnchantmentLevel(levelInput) {
    if (!levelInput) return;

    const enchantmentItem = levelInput.closest('.enchantment-item');
    if (!enchantmentItem) return;

    const enchantSelect = enchantmentItem.querySelector('.enchant-select');
    if (!enchantSelect) return;

    const enchantKey = enchantSelect.value;

    if (enchantKey) {
        const maxLevel = getEnchantmentMaxLevel(enchantKey);
        const currentValue = parseInt(levelInput.value) || 1;

        if (currentValue > maxLevel) {
            levelInput.value = maxLevel;
        } else if (currentValue < 1) {
            levelInput.value = 1;
        }
    }

    updateCommand();
}

// Update all enchantment dropdowns based on selected item
function updateEnchantmentDropdowns() {
    const selectedItem = itemSelect.value;
    const availableEnchantments = getAvailableEnchantments(selectedItem);

    const enchantmentItems = document.querySelectorAll('.enchantment-item');

    enchantmentItems.forEach(item => {
        const enchantSelect = item.querySelector('.enchant-select');
        if (!enchantSelect) return;

        const currentValue = enchantSelect.value;

        // Only update if current selection is not available for this item
        if (currentValue && !availableEnchantments.includes(currentValue)) {
            enchantSelect.value = '';
            updateEnchantmentLevel(enchantSelect);
        }

        // Update options
        enchantSelect.innerHTML = generateEnchantmentOptions(availableEnchantments, currentValue);

        // Restore the value if it was valid
        if (currentValue && availableEnchantments.includes(currentValue)) {
            enchantSelect.value = currentValue;
        }

        // Update level input if enchantment is still selected
        if (enchantSelect.value) {
            updateEnchantmentLevel(enchantSelect);
        } else {
            // Hide max level info if no enchantment selected
            const maxLevelInfo = item.querySelector('.max-level-info');
            if (maxLevelInfo) {
                maxLevelInfo.style.display = 'none';
            }
            const levelInput = item.querySelector('.enchant-level');
            if (levelInput) {
                levelInput.max = 10;
            }
        }
    });
}

// Get all form elements
const itemSelect = document.getElementById('itemSelect');
const quantityInput = document.getElementById('quantityInput');
const silentMode = document.getElementById('silentMode');
const commandOutput = document.getElementById('commandOutput');
const enchantmentsContainer = document.querySelector('.enchantments-container');
const languageSelect = document.getElementById('languageSelect');
const versionSelect = document.getElementById('versionSelect');
const themeSelect = document.getElementById('themeSelect');

// New Core Properties elements
const targetSelect = document.getElementById('targetSelect');
const targetName = document.getElementById('targetName');
const fileInput = document.getElementById('itemSearch'); // Use itemSearch variable name
const itemSearch = document.getElementById('itemSearch');
const unbreakable = document.getElementById('unbreakable');

// Display Settings elements
const customName = document.getElementById('customName');
const nameColor = document.getElementById('nameColor');
const nameBold = document.getElementById('nameBold');
const nameItalic = document.getElementById('nameItalic');
const customLore = document.getElementById('customLore');

// Add event listeners
itemSelect.addEventListener('change', () => {
    updateEnchantmentDropdowns();
    updateCommand();
});

// Search listener
itemSearch.addEventListener('input', function () {
    const currentVal = itemSelect.value;
    itemSelect.innerHTML = generateItemOptions(this.value);
    // Restore selection if it still exists
    if (currentVal && itemSelect.querySelector(`option[value="${currentVal}"]`)) {
        itemSelect.value = currentVal;
    }
});
quantityInput.addEventListener('input', updateCommand);
silentMode.addEventListener('change', updateCommand);

// Display Settings listeners
const displayInputs = [customName, nameColor, nameBold, nameItalic, customLore];
displayInputs.forEach(input => {
    input.addEventListener('input', updateCommand);
    input.addEventListener('change', updateCommand);
});

// Mutual Exclusivity for Bold/Italic
nameBold.addEventListener('change', () => {
    if (nameBold.checked) {
        nameItalic.checked = false;
        updateCommand(); // Re-trigger update to reflect change
    }
});

nameItalic.addEventListener('change', () => {
    if (nameItalic.checked) {
        nameBold.checked = false;
        updateCommand(); // Re-trigger update to reflect change
    }
});

versionSelect.addEventListener('change', () => {
    updateCommand();
    // Update OP Items if visible
    if (document.getElementById('opItemsContainer').style.display === 'block') {
        showOPItems();
    }
});
languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    updateUIText();
    updateCommand();
});

// New Core Properties listeners
targetSelect.addEventListener('change', () => {
    // Show/Hide custom name input
    if (targetSelect.value === 'custom') {
        targetName.style.display = 'block';
    } else {
        targetName.style.display = 'none';
    }
    updateCommand();
});
targetName.addEventListener('input', updateCommand);
unbreakable.addEventListener('change', updateCommand);


// Theme toggle function
function updateTheme() {
    if (!themeSelect) return;
    const theme = themeSelect.value;
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    // Save theme preference
    localStorage.setItem('theme', theme);
}

if (themeSelect) {
    themeSelect.addEventListener('change', updateTheme);
}

// Add enchantment function
function addEnchantment() {
    const selectedItem = itemSelect.value;
    const availableEnchantments = getAvailableEnchantments(selectedItem);

    const enchantmentItem = document.createElement('div');
    enchantmentItem.className = 'enchantment-item';

    const enchantSelect = document.createElement('select');
    enchantSelect.className = 'enchant-select';
    enchantSelect.innerHTML = generateEnchantmentOptions(availableEnchantments);

    const levelWrapper = document.createElement('div');
    levelWrapper.className = 'enchant-level-wrapper';

    const enchantLevel = document.createElement('input');
    enchantLevel.type = 'number';
    enchantLevel.className = 'enchant-level';
    enchantLevel.min = 1;
    enchantLevel.max = 10;
    enchantLevel.value = 1;
    enchantLevel.placeholder = translations[currentLanguage].ui.enchantLevelPlaceholder;

    const maxLevelInfo = document.createElement('span');
    maxLevelInfo.className = 'max-level-info';
    maxLevelInfo.style.display = 'none';

    levelWrapper.appendChild(enchantLevel);
    levelWrapper.appendChild(maxLevelInfo);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-enchant';
    removeBtn.textContent = '×';
    removeBtn.onclick = function () {
        removeEnchantment(this);
    };

    enchantmentItem.appendChild(enchantSelect);
    enchantmentItem.appendChild(levelWrapper);
    enchantmentItem.appendChild(removeBtn);

    enchantSelect.setAttribute('data-listener-attached', 'true');
    enchantLevel.setAttribute('data-listener-attached', 'true');

    enchantSelect.addEventListener('change', () => {
        updateEnchantmentLevel(enchantSelect);
    });
    enchantLevel.addEventListener('input', () => {
        validateEnchantmentLevel(enchantLevel);
    });
    enchantLevel.addEventListener('blur', () => {
        validateEnchantmentLevel(enchantLevel);
    });

    enchantmentsContainer.appendChild(enchantmentItem);
}

// Remove enchantment function
function removeEnchantment(button) {
    button.parentElement.remove();
    updateCommand();
}

// Remove enchantment function
// Collect current state
function getCurrentState() {
    const state = {
        item: itemSelect.value,
        quantity: quantityInput.value,
        unbreakable: unbreakable.checked,
        target: targetSelect.value,
        targetName: targetName.value,
        customName: customName.value,
        nameColor: nameColor.value,
        nameBold: nameBold.checked,
        nameItalic: nameItalic.checked,
        customLore: customLore.value,
        enchantments: []
    };

    // Collect Enchantments
    document.querySelectorAll('.enchantment-item').forEach(row => {
        state.enchantments.push({
            id: row.querySelector('.enchant-select').value,
            lvl: row.querySelector('.enchant-level').value
        });
    });

    return state;
}

// Restore state
function restoreState(state) {
    if (!state) return;

    // Restore simple inputs
    itemSelect.innerHTML = generateItemOptions(); // Reset filtering
    itemSelect.value = state.item || '';
    quantityInput.value = state.quantity || 1;
    unbreakable.checked = !!state.unbreakable;
    targetSelect.value = state.target || 'p';
    targetName.value = state.targetName || '';

    // Toggle target name visibility
    if (state.target === 'custom') {
        targetName.style.display = 'block';
    } else {
        targetName.style.display = 'none';
    }

    customName.value = state.customName || '';
    nameColor.value = state.nameColor || '';
    nameBold.checked = !!state.nameBold;
    nameItalic.checked = !!state.nameItalic;
    customLore.value = state.customLore || '';

    // Restore Enchantments
    enchantmentsContainer.innerHTML = '';
    (state.enchantments || []).forEach(ench => {
        addEnchantmentRow(); // Creates row
        const rows = document.querySelectorAll('.enchantment-item');
        const lastRow = rows[rows.length - 1]; // Get the one we just added
        if (lastRow) {
            lastRow.querySelector('.enchant-select').value = ench.id;
            lastRow.querySelector('.enchant-level').value = ench.lvl;
        }
    });

    updateEnchantmentDropdowns();
    updateCommand();
}

// Update command function
function updateCommand() {
    const item = itemSelect.value;
    const quantity = parseInt(quantityInput.value) || 1;
    const isSilent = silentMode.checked;
    const placeholder = translations[currentLanguage].ui.commandPlaceholder;

    if (!item) {
        commandOutput.value = '';
        return;
    }

    // Get all enchantments
    const enchantments = [];
    const enchantmentItems = document.querySelectorAll('.enchantment-item');

    enchantmentItems.forEach(item => {
        const enchantSelect = item.querySelector('.enchant-select');
        const enchantLevel = item.querySelector('.enchant-level');

        if (!enchantSelect || !enchantLevel) return;

        const enchantKey = enchantSelect.value;
        const levelValue = enchantLevel.value;

        // Check if both enchantment and level are selected and valid
        if (enchantKey && levelValue && levelValue.trim() !== '') {
            const enchantId = enchantmentIds[enchantKey];
            const level = parseInt(levelValue.trim());

            // Only add if we have valid enchantment ID and valid level (1 or higher)
            if (enchantId && !isNaN(level) && level >= 1) {
                enchantments.push({
                    id: enchantId,
                    lvl: level
                });
            }
        }
    });

    // Get selected version format
    const versionFormat = versionSelect.value; // 'old' or 'new'

    // Get Target
    let target = targetSelect.value;
    if (target === 'custom') {
        target = targetName.value.trim() || '@s'; // Default to @s if custom empty
    }

    // Get Unbreakable status
    const isUnbreakable = unbreakable.checked;

    // Get Display Settings
    const nameText = customName.value.trim();
    const loreText = customLore.value.trim();

    // Construct Name JSON
    let nameJson = '';
    if (nameText) {
        const nameObj = { text: nameText };
        if (nameColor.value) nameObj.color = nameColor.value;
        if (nameBold.checked) nameObj.bold = true;
        if (nameItalic.checked) nameObj.italic = true;
        nameJson = JSON.stringify(nameObj);
    }

    // Construct Lore JSON Array
    let loreJsonList = [];
    if (loreText) {
        const lines = loreText.split('\n');
        loreJsonList = lines.map(line => JSON.stringify({ text: line }));
    }

    // Build the command based on version
    let command = '';
    const itemWithNamespace = `minecraft:${item}`;

    // Base command without slash - using selected target
    let baseCommand = `give ${target} ${itemWithNamespace}`;

    if (versionFormat === 'old') {
        const nbtParts = [];

        // Add Enchantments
        if (enchantments.length > 0) {
            const enchantmentsJson = enchantments.map(e => `{id:"${e.id}",lvl:${e.lvl}}`).join(',');
            nbtParts.push(`Enchantments:[${enchantmentsJson}]`);
        }

        // Add Unbreakable
        if (isUnbreakable) {
            nbtParts.push('Unbreakable:1b');
        }

        // Add Display (Name & Lore)
        if (nameJson || loreJsonList.length > 0) {
            const displayParts = [];
            if (nameJson) {
                const safeNameJson = nameJson.replace(/'/g, "\\'");
                displayParts.push(`Name:'${safeNameJson}'`);
            }
            if (loreJsonList.length > 0) {
                const safeLore = loreJsonList.map(l => `'${l.replace(/'/g, "\\'")}'`).join(',');
                displayParts.push(`Lore:[${safeLore}]`);
            }
            nbtParts.push(`display:{${displayParts.join(',')}}`);
        }

        // Construct NBT String
        const nbtString = nbtParts.length > 0 ? `{${nbtParts.join(',')}}` : '';
        baseCommand += `${nbtString} ${quantity}`;

    } else {
        // NEW FORMAT (1.20.5+)
        const componentParts = [];

        // Add Enchantments
        if (enchantments.length > 0) {
            const levelsEntries = enchantments.map(e => `"${e.id}":${e.lvl}`).join(',');
            componentParts.push(`enchantments={levels:{${levelsEntries}}}`);
        }

        // Add Unbreakable
        if (isUnbreakable) {
            componentParts.push('unbreakable={}');
        }

        // Add Custom Name
        if (nameJson) {
            const safeNameJson = nameJson.replace(/'/g, "\\'");
            componentParts.push(`custom_name='${safeNameJson}'`);
        }

        // Add Lore
        if (loreJsonList.length > 0) {
            const safeLore = loreJsonList.map(l => `'${l.replace(/'/g, "\\'")}'`).join(',');
            componentParts.push(`lore=[${safeLore}]`);
        }

        // Construct Component String
        const componentsString = componentParts.length > 0 ? `[${componentParts.join(',')}]` : '';
        baseCommand += `${componentsString} ${quantity}`;
    }

    // Add silent mode prefix if enabled
    if (isSilent) {
        // Silent: /execute as @s run give ... -> /execute as target run give ...? 
        // Actually, if silent, we usually execute AS the target? Or just suppress output?
        // Command blocks don't output to chat anyway unless Gamerule is true.
        // The original logic was /execute as @s run ... which makes the command run as the entity executing it.
        // For /give, we specify the target explicitly in the give command.
        // A common "Silent" trick is to run it via execute so it doesn't show "Given [Item] to [Player]" in chat if command block output is off?
        // But /give always gives feedback to the target unless gamerule sendCommandFeedback is false.
        // Let's stick to the previous pattern: /execute as @s run ...
        // BUT, if we have a Custom Target, executing 'as @s' (the one clicking?) might be weird if I give to someone else.
        // Let's assume the user runs this. @s is the user. 
        // We will keep standard behavior: /execute as @s run ...

        command = `/execute as @s run ${baseCommand}`;
    } else {
        // Normal: /give ...
        command = `/${baseCommand}`;
    }

    // Display the command - ensure proper formatting and no character corruption
    // Use value for textarea
    commandOutput.value = command;

    // Debug: Log command to console to verify format
    console.log('Generated command:', command);
}

// Copy command function
function copyCommand() {
    const command = commandOutput.value;
    const placeholder = translations[currentLanguage].ui.commandPlaceholder;
    const copiedText = translations[currentLanguage].ui.copied;
    const errorText = translations[currentLanguage].ui.copyError;

    if (command) {
        navigator.clipboard.writeText(command).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = copiedText;
            copyBtn.style.background = 'var(--success)';

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = 'var(--accent)';
            }, 2000);
        }).catch(err => {
            console.error('Copy error:', err);
            alert(errorText);
        });
    }
}

// Initialize enchantment event listeners for existing items
function initializeEnchantmentListeners() {
    const enchantmentItems = document.querySelectorAll('.enchantment-item');

    enchantmentItems.forEach(item => {
        const enchantSelect = item.querySelector('.enchant-select');
        const enchantLevel = item.querySelector('.enchant-level');

        if (enchantSelect && enchantLevel) {
            // Remove old listeners by cloning (to avoid duplicates)
            const newEnchantSelect = enchantSelect.cloneNode(true);
            const newEnchantLevel = enchantLevel.cloneNode(true);

            // Replace old elements with new ones (with null checks)
            if (enchantSelect.parentNode) {
                enchantSelect.parentNode.replaceChild(newEnchantSelect, enchantSelect);
            }
            if (enchantLevel.parentNode) {
                enchantLevel.parentNode.replaceChild(newEnchantLevel, enchantLevel);
            }

            // Add listeners to new elements
            newEnchantSelect.addEventListener('change', () => {
                updateEnchantmentLevel(newEnchantSelect);
            });
            newEnchantLevel.addEventListener('input', () => {
                validateEnchantmentLevel(newEnchantLevel);
            });
            newEnchantLevel.addEventListener('blur', () => {
                validateEnchantmentLevel(newEnchantLevel);
            });

            // Update level if enchantment is already selected
            if (newEnchantSelect.value) {
                updateEnchantmentLevel(newEnchantSelect);
            }
        }
    });
}

// OP Items (Master Set) commands
const opItemsCommands = {
    tr: [
        {
            name: 'Netherite Kask',
            command: '/give @s netherite_helmet{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Kask: Protection 4, Unbreaking 3, Mending ile maksimum koruma sağlar.'
        },
        {
            name: 'Netherite Göğüslük',
            command: '/give @s netherite_chestplate{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Göğüslük: Protection 4, Unbreaking 3, Mending ile maksimum koruma sağlar.'
        },
        {
            name: 'Netherite Pantolon',
            command: '/give @s netherite_leggings{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Pantolon: Protection 4, Unbreaking 3, Mending ile maksimum koruma sağlar.'
        },
        {
            name: 'Netherite Bot',
            command: '/give @s netherite_boots{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Bot: Protection 4, Unbreaking 3, Mending ile maksimum koruma sağlar.'
        },
        {
            name: 'God Sword (Netherite Kılıç)',
            command: '/give @s netherite_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5},{id:"minecraft:fire_aspect",lvl:2},{id:"minecraft:looting",lvl:3},{id:"minecraft:knockback",lvl:2},{id:"minecraft:unbreaking",lvl:3}]}',
            description: 'God Sword: Sharpness 5, Fire Aspect 2, Looting 3, Knockback 2, Unbreaking 3 ile en güçlü kılıç.'
        },
        {
            name: 'Ultimate Pickaxe (Netherite Kazma)',
            command: '/give @s netherite_pickaxe{Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:fortune",lvl:3},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Ultimate Pickaxe: Efficiency 5, Fortune 3, Unbreaking 3, Mending ile en hızlı ve karlı kazma.'
        },
        {
            name: 'Admin Sword (Sharpness 255)',
            command: '/give @s netherite_sword{Enchantments:[{id:"minecraft:sharpness",lvl:255},{id:"minecraft:fire_aspect",lvl:2},{id:"minecraft:looting",lvl:3},{id:"minecraft:knockback",lvl:2},{id:"minecraft:unbreaking",lvl:3}]}',
            description: 'Hileli Eşya: Sharpness 255 ile neredeyse her şeyi tek vuruşta öldüren aşırı güçlü kılıç. (Normalde basılamaz, sadece komutla mümkün)'
        }
    ],
    en: [
        {
            name: 'Netherite Helmet',
            command: '/give @s netherite_helmet{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Helmet: Protection 4, Unbreaking 3, Mending for maximum protection.'
        },
        {
            name: 'Netherite Chestplate',
            command: '/give @s netherite_chestplate{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Chestplate: Protection 4, Unbreaking 3, Mending for maximum protection.'
        },
        {
            name: 'Netherite Leggings',
            command: '/give @s netherite_leggings{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Leggings: Protection 4, Unbreaking 3, Mending for maximum protection.'
        },
        {
            name: 'Netherite Boots',
            command: '/give @s netherite_boots{Enchantments:[{id:"minecraft:protection",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Full Netherite Set - Boots: Protection 4, Unbreaking 3, Mending for maximum protection.'
        },
        {
            name: 'God Sword (Netherite Sword)',
            command: '/give @s netherite_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5},{id:"minecraft:fire_aspect",lvl:2},{id:"minecraft:looting",lvl:3},{id:"minecraft:knockback",lvl:2},{id:"minecraft:unbreaking",lvl:3}]}',
            description: 'God Sword: Sharpness 5, Fire Aspect 2, Looting 3, Knockback 2, Unbreaking 3 - the ultimate sword.'
        },
        {
            name: 'Ultimate Pickaxe (Netherite Pickaxe)',
            command: '/give @s netherite_pickaxe{Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:fortune",lvl:3},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}',
            description: 'Ultimate Pickaxe: Efficiency 5, Fortune 3, Unbreaking 3, Mending - the fastest and most profitable pickaxe.'
        },
        {
            name: 'Admin Sword (Sharpness 255)',
            command: '/give @s netherite_sword{Enchantments:[{id:"minecraft:sharpness",lvl:255},{id:"minecraft:fire_aspect",lvl:2},{id:"minecraft:looting",lvl:3},{id:"minecraft:knockback",lvl:2},{id:"minecraft:unbreaking",lvl:3}]}',
            description: 'Cheat Item: Sharpness 255 sword that kills almost everything in one hit. (Cannot be enchanted normally, only via command)'
        }
    ]
};

// Convert NBT format command to Component format
function convertCommandToNewFormat(oldCommand) {
    // Extract item name and enchantments from old format
    // Format: /give @s item{Enchantments:[{id:"minecraft:enchant",lvl:X}]}
    const match = oldCommand.match(/\/give @s (minecraft:)?(\w+)\{Enchantments:\[(.*?)\]\}/);
    if (!match) return oldCommand; // Return original if can't parse

    const itemName = match[2];
    const enchantmentsStr = match[3];

    // Parse enchantments
    const enchantments = [];
    const enchantRegex = /\{id:"([^"]+)",lvl:(\d+)\}/g;
    let enchantMatch;
    while ((enchantMatch = enchantRegex.exec(enchantmentsStr)) !== null) {
        enchantments.push({
            id: enchantMatch[1],
            lvl: parseInt(enchantMatch[2])
        });
    }

    if (enchantments.length === 0) return oldCommand;

    // Build new format: /give @s minecraft:item[enchantments={levels:{'minecraft:sharpness':5}}] 1
    const levelsObj = enchantments.map(e => `'${e.id}':${e.lvl}`).join(',');
    return `/give @s minecraft:${itemName}[enchantments={levels:{${levelsObj}}}] 1`;
}

// Show OP Items
function showOPItems() {
    const container = document.getElementById('opItemsContainer');
    const list = document.getElementById('opItemsList');
    const items = opItemsCommands[currentLanguage] || opItemsCommands['en'];
    const versionFormat = versionSelect ? versionSelect.value : 'old';

    list.innerHTML = '';

    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'op-item-card';

        const t = translations[currentLanguage].ui;

        // Convert command based on selected version
        let command = item.command;
        if (versionFormat === 'new') {
            command = convertCommandToNewFormat(item.command);
        }

        const commandEscaped = command.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

        itemDiv.innerHTML = `
            <div class="op-item-header">
                <h4>${item.name}</h4>
                <button type="button" class="op-copy-btn" data-command="${commandEscaped}">${t.copyCommand}</button>
            </div>
            <div class="op-command-output">${command}</div>
            <div class="op-item-description">
                <strong>${t.commandDescription}</strong> ${item.description}
            </div>
        `;

        // Add event listener to the copy button
        const copyBtn = itemDiv.querySelector('.op-copy-btn');
        copyBtn.addEventListener('click', function () {
            const command = this.getAttribute('data-command').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
            copyOPCommand(command, this);
        });

        list.appendChild(itemDiv);
    });

    container.style.display = 'block';
}

// Hide OP Items
function hideOPItems() {
    document.getElementById('opItemsContainer').style.display = 'none';
}

// Preset Management Functions
function savePreset() {
    const presetName = document.getElementById('presetName').value.trim();
    if (!presetName) {
        alert(translations[currentLanguage].ui.presetNameError || 'Please enter a preset name!');
        return;
    }

    const currentState = getCurrentState(); // Helper to capture UI state
    const presets = JSON.parse(localStorage.getItem('mc_command_presets') || '{}');

    presets[presetName] = currentState;
    localStorage.setItem('mc_command_presets', JSON.stringify(presets));

    updatePresetDropdown();
    alert(translations[currentLanguage].ui.presetSaved || 'Preset saved!');
    document.getElementById('presetName').value = '';
}

function loadPreset() {
    const presetName = document.getElementById('presetSelect').value;
    if (!presetName) return;

    const presets = JSON.parse(localStorage.getItem('mc_command_presets') || '{}');
    const state = presets[presetName];

    if (state) {
        restoreState(state); // Helper to restore UI state
        // alert(translations[currentLanguage].ui.presetLoaded || 'Preset loaded!');
    }
}

function deletePreset() {
    const presetName = document.getElementById('presetSelect').value;
    if (!presetName) return;

    if (confirm(translations[currentLanguage].ui.presetDeleteConfirm || 'Are you sure?')) {
        const presets = JSON.parse(localStorage.getItem('mc_command_presets') || '{}');
        delete presets[presetName];
        localStorage.setItem('mc_command_presets', JSON.stringify(presets));

        updatePresetDropdown();
        // alert(translations[currentLanguage].ui.presetDeleted || 'Preset deleted!');
    }
}

function updatePresetDropdown() {
    const presetSelect = document.getElementById('presetSelect');
    const presets = JSON.parse(localStorage.getItem('mc_command_presets') || '{}');
    const t = translations[currentLanguage].ui;

    // Clear existing (except placeholder)
    presetSelect.innerHTML = `<option value="">${t.selectPresetPlaceholder || 'Select a preset...'}</option>`;

    for (const name of Object.keys(presets)) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        presetSelect.appendChild(option);
    }
}

// Helper: Get Current State
function getCurrentState() {
    const state = {
        item: itemSelect.value,
        quantity: document.getElementById('quantityInput').value,
        version: versionSelect ? versionSelect.value : 'old',
        customName: document.getElementById('customName').value,
        nameColor: document.getElementById('nameColor').value,
        isBold: document.getElementById('nameBold').checked,
        isItalic: document.getElementById('nameItalic').checked,
        lore: document.getElementById('customLore').value,
        target: document.getElementById('targetSelect').value,
        targetName: document.getElementById('targetName').value,
        unbreakable: document.getElementById('unbreakable').checked,
        enchantments: []
    };

    // Collect enchantments
    document.querySelectorAll('.enchantment-item').forEach(item => {
        const sel = item.querySelector('.enchant-select');
        const lvl = item.querySelector('.enchant-level');
        if (sel && sel.value) {
            state.enchantments.push({ id: sel.value, lvl: lvl.value });
        }
    });

    return state;
}

// Helper: Restore State
function restoreState(state) {
    if (!state) return;

    if (state.item) itemSelect.value = state.item;
    if (state.quantity) document.getElementById('quantityInput').value = state.quantity;
    if (versionSelect && state.version) versionSelect.value = state.version;

    document.getElementById('customName').value = state.customName || '';
    document.getElementById('nameColor').value = state.nameColor || '';
    document.getElementById('nameBold').checked = state.isBold || false;
    document.getElementById('nameItalic').checked = state.isItalic || false;
    document.getElementById('customLore').value = state.lore || '';

    document.getElementById('targetSelect').value = state.target || '@p';
    document.getElementById('targetName').value = state.targetName || '';
    document.getElementById('unbreakableCheck').checked = state.unbreakable || false;

    updateTargetInput(); // Update visibility UI

    // Restore Enchantments
    const container = document.getElementById('enchantmentsContainer');
    container.innerHTML = ''; // Clear current

    if (state.enchantments && state.enchantments.length > 0) {
        state.enchantments.forEach(enc => {
            const index = addEnchantment(); // Adds and helper return logic might need tweaking or we simulate clicks
            // Since addEnchantment doesn't return the elements, we grab the last one
            const items = container.querySelectorAll('.enchantment-item');
            const lastItem = items[items.length - 1];
            if (lastItem) {
                lastItem.querySelector('.enchant-select').value = enc.id;
                lastItem.querySelector('.enchant-level').value = enc.lvl;
            }
        });
    }

    updateCommand();
}

// Copy OP Command
function copyOPCommand(command, button) {
    navigator.clipboard.writeText(command).then(() => {
        // Show feedback
        if (button) {
            const originalText = button.textContent;
            button.textContent = translations[currentLanguage].ui.copied;
            button.style.background = 'var(--success)';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'var(--accent)';
            }, 2000);
        }
    }).catch(err => {
        console.error('Copy error:', err);
        alert(translations[currentLanguage].ui.copyError);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language from select
    currentLanguage = languageSelect.value;

    // Load saved theme preference or use system default
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Use saved preference if exists
        if (themeSelect) {
            themeSelect.value = savedTheme;
            updateTheme();
        }
    } else {
        // Use system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';

        if (themeSelect) {
            themeSelect.value = defaultTheme;
            updateTheme();
        }
    }

    // Language Detection Logic
    // 1. Check for saved language (if we implement saving later, for now we skip)
    // 2. Check browser language
    // 3. Fallback to English (default)

    // Get browser language (e.g., 'en-US' -> 'en')
    const browserLang = navigator.language.split('-')[0];

    // Check if we support this language
    if (translations[browserLang]) {
        currentLanguage = browserLang;
    } else {
        currentLanguage = 'en'; // Fallback to English
    }

    // Update the dropdown to match detected language
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }

    // Initialize UI with detected language
    updateUIText();
    updatePresetDropdown(); // Load presets on start

    // Preset Event Listeners
    const saveBtn = document.getElementById('savePresetBtn');
    const loadBtn = document.getElementById('loadPresetBtn');
    const deleteBtn = document.getElementById('deletePresetBtn');

    if (saveBtn) saveBtn.addEventListener('click', savePreset);
    if (loadBtn) loadBtn.addEventListener('click', loadPreset);
    if (deleteBtn) deleteBtn.addEventListener('click', deletePreset);

    // Initialize enchantment listeners
    initializeEnchantmentListeners();

    // Update enchantment dropdowns if an item is already selected
    if (itemSelect.value) {
        updateEnchantmentDropdowns();
    }

    // Update command to show placeholder
    updateCommand();
});

