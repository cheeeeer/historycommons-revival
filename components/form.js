import {useState} from "react";

export function FilterForm({ timeline }){
    const categoryOptions = timelinesAndCategories[timeline].categories.map((i)=><option key={i.value} value={i.value} name={i.name}>{i.name}</option>)
    const [selectedCategory, setSelectedCategory] = useState('key_events');
    return(
        <form>
            <label htmlFor='category'>Category </label>
            <select multiple onChange={(i)=>{setSelectedCategory(i.target.value)}} name='category' placeholder='Category'>
                {categoryOptions}
            </select>

            <label htmlFor='subcategory'>Subcategory </label>
            <select multiple name="subcategory" placeholder="Subcategory">
                <FilterSubCategories timeline={timeline} category={selectedCategory}/>
            </select>
        </form>
    )
}
export default function ContributeForm({ timeline }){
    const categoryOptions = timelinesAndCategories[timeline].categories.map((i)=><option key={i.value} value={i.value} name={i.name}>{i.name}</option>)
    const [selectedCategory, setSelectedCategory] = useState('key_events');
    return(
        <form>
            <label htmlFor='category'>Category </label>
            <select multiple onChange={(i)=>{setSelectedCategory(i.target.value)}} name='category' placeholder='Category'>
                {categoryOptions}
            </select>

            <label htmlFor='subcategory'>Subcategory </label>
            <select multiple name="subcategory" placeholder="Subcategory">
                <ContributeSubCategories timeline={timeline} category={selectedCategory}/>
            </select>
        </form>
    )
}
function FilterSubCategories ({ timeline, category }){
    return timelinesAndCategories[timeline].categories.filter((cat) => cat.value === category)[0].subcategories.map((i) =>
        <option key={i.value} value={i.value} name={i.name}>{i.name}</option>)
}
function ContributeSubCategories ({ timeline, category }){
    return timelinesAndCategories[timeline].categories.filter((cat) => cat.value === category)[0].subcategories.map((i) =>
        <option key={i.value} value={i.value} name={i.name}>{i.name}</option>)
}
const timelinesAndCategories = {
    "US Solar Industry": {},
    "Global Financial and Economic Crisis 2007-Present": {},
    "Complete 911 Timeline": {
        categories: [
            { name: 'Key Events',
              value: 'key_events',
              subcategories: [
                  { name: 'Key Day of 9/11 Events', value: 'key_day_of_9/11_events' },
                  { name: 'Key Hijacker Events', value: 'key_hijacker_events' },
                  { name: 'Key Warnings', value: 'key_warnings' },
              ]
            },
            { name: 'Day of 9/11',
              value: 'day_of_9/11',
                subcategories: [
                    { name: 'All Day of 9/11 Events', value: 'all_day_of_9/11_events' },
                    { name: 'Dick Cheney', value: 'dick_cheney' },
                    { name: 'Donald Rumsfeld', value: 'donald_rumsfeld' },
                    { name: 'Flight AA 11', value: 'flight_aa_11' },
                    { name: 'Flight AA 77', value: 'flight_aa_77' },
                    { name: 'Flight UA 175', value: 'flight_ua_175' },
                    { name: 'Flight UA 93', value: 'flight_ua_93' },
                    { name: 'George Bush', value: 'george_bush' },
                    { name: 'Passenger Phone Calls', value: 'passenger_phone_calls' },
                    { name: 'Pentagon', value: 'pentagon' },
                    { name: 'Richard Clarke', value: 'richard_clarke' },
                    { name: 'Shanksville, Pennsylvania', value: 'shanksville_pennsylvania' },
                    { name: 'Training Exercises', value: 'training_exercises' },
                    { name: 'World Trade Center', value: 'world_trade_center' },
                ]

            },
            { name: 'The Alleged 9/11 Hijackers',
                value: 'alleged_9/11_hijackers',
                subcategories: [
                    { name: 'Alhazmi and Almihdhar', value: 'alhazmi_and_almihdhar' },
                    { name: 'Marwan Alshehhi', value: 'marwan_alshehhi' },
                    { name: 'Mohamed Atta', value: 'mohamed_atta' },
                    { name: 'Hani Hanjour', value: 'hani_hanjour' },
                    { name: 'Ziad Jarrah', value: 'ziad_jarrah' },
                    { name: 'Other 9/11 Hijackers', value: 'other_9/11_hijackers' },
                    { name: 'Possible Hijacker Associates in US', value: 'possible_hijacker_associates' },
                    { name: "Alleged Hijackers' Flight Training", value: 'hijackers_flight_training' },
                    { name: 'Hijacker Contact w Government in US', value: 'hijacker_contact_w_government' },
                    { name: 'Possible 9/11 Hijacker Funding', value: 'possible_hijacker_funding' },
                    { name: 'Hijacker Visas and Immigration', value: 'hijacker_visas_immigration' },
                ]

            },
            { name: 'Alhazmi and Almihdhar: Specific Cases',
                value: 'alhazmi_and_almihdhar',
                subcategories: [
                    { name: 'Bayoumi and Basnan Saudi Connection', value: 'bayoumi_and_basnan_saudi_connection' },
                    { name: 'CIA Hiding Alhazmi & Almihdhar', value: 'cia_hiding_azhazmi_and_almihdhar' },
                    { name: 'Search for Alhazmi/ Almihdhar in US', value: 'search_for_alhazmi/almihdhar_in_us' },
                ]

            },
            { name: 'Projects and Programs',
                value: 'projects_and_programs',
                subcategories: [
                    { name: 'Al-Qaeda Malaysia Summit', value: 'al-qaeda_malaysia_summit' },
                    { name: 'Able Danger', value: 'able_danger' },
                    { name: 'Sibel Edmonds', value: 'sibel_edmonds' },
                    { name: 'Phoenix Memo', value: 'phoenix_memo' },
                    { name: 'Randy Glass/ Diamondback', value: 'randy_glass/diamondback' },
                    { name: 'Robert Wright and Vulgar Betrayal', value: 'robert_wright_and_vulgar_betrayal' },
                    { name: 'Remote Surveillance', value: 'remote_surveillance' },
                    { name: 'Yemen Hub', value: 'yemen_hub' },
                ]

            },
            { name: 'Before 9/11',
                value: 'before_9/11',
                subcategories: [
                    { name: 'Soviet-Afghan War', value: 'soviet-afghan_war' },
                    { name: 'Warning Signs', value: 'warning_signs' },
                    { name: 'Insider Trading/ Foreknowledge', value: 'insider_trading/foreknowledge' },
                    { name: 'US Air Security', value: 'us_air_security' },
                    { name: 'Military Exercises', value: 'military_exercises' },
                    { name: 'Pipeline Politics', value: 'pipeline_politics' },
                    { name: 'Other Pre-9/11 Events', value: 'other_pre-9/11_events' },
                ]

            },
            { name: 'Counterterrorism before 9/11',
                value: 'counterterrorism_before_9/11',
                subcategories: [
                    { name: 'Hunt for Bin Laden', value: 'hunt_for_bin_laden' },
                    { name: 'Counterterrorism Action Before 9/11', value: 'counterterrorism_action_before_9/11' },
                    { name: 'Counterterrorism Policy/Politics', value: 'counterterrorism_policy/politics_before_9/11' },
                ]

            },
            { name: 'Warning Signs: Specific Cases',
                value: 'warning_signs',
                subcategories: [
                    { name: 'Foreign Intelligence Warnings', value: 'foreign_intelligence_warnings' },
                    { name: "Bush's Aug. 6, 2001 PDB", value: 'bush_aug_6_2001_pdb' },
                    { name: 'Presidential Level Warnings', value: 'presidential_level_warnings' },
                ]

            },
            { name: 'The Post-9/11 World',
                value: 'post_9/11',
                subcategories: [
                    { name: '9/11 Investigations', value: '9/11_investigations' },
                    { name: '9/11 Related Criminal Proceedings', value: '9/11_related_criminal_proceedings' },
                    { name: '9/11 Denials', value: '9/11_denials' },
                    { name: 'US Government and 9/11 Criticism', value: 'us_gov_and_9/11_criticism' },
                    { name: '9/11 Related Lawsuits', value: '9/11_related_lawsuits' },
                    { name: 'Media', value: 'media' },
                    { name: 'Other Post-9/11 Events', value: 'other_post-9/11_events' },
                ]

            },
            { name: 'Investigations: Specific Cases',
                value: 'investigations',
                subcategories: [
                    { name: '9/11 Commission', value: '9/11_commission' },
                    { name: 'Role of Philip Zelikow', value: 'role_of_philip_zelikow' },
                    { name: '9/11 Congressional Inquiry', value: '9/11_congressional_inquiry' },
                    { name: 'CIA OIG 9/11 Report', value: 'cia_oig_9/11_report' },
                    { name: 'FBI 9/11 Investigation', value: 'fbi_9/11_investigation' },
                    { name: 'WTC Investigation', value: 'wtc_investigation' },
                    { name: 'Other 9/11 Investigations', value: 'other_9/11_investigations' },
                ]

            },
            { name: 'Possible Al-Qaeda-Linked Moles or Informants',
                value: 'possible_al-qaeda_informants',
                subcategories: [
                    { name: 'Abu Hamza Al-Masri', value: 'abu_hamza_al-masri' },
                    { name: 'Abu Qatada', value: 'abu_qatada' },
                    { name: 'Ali Mohamed', value: 'ali_mohamed' },
                    { name: 'Haroon Rashid Aswat', value: 'haroon_rashid_aswat' },
                    { name: 'Khalil Deek', value: 'khalil_deek' },
                    { name: 'Luai Sakra', value: 'luai_sakra' },
                    { name: 'Mamoun Darkazanli', value: 'mamoun_darkazanli' },
                    { name: 'Nabil Al-Marabh', value: 'nabil_al-marabh' },
                    { name: 'Omar Bakri & Al-Muhajiroun', value: 'omar_bakri_and_al-muhajiroun' },
                    { name: 'Reda Hassaine', value: 'reda_hassaine' },
                    { name: 'Other Possible Moles or Informants', value: 'other_possible_moles/informants' },
                ]

            },
            { name: 'Other Al-Qaeda-Linked Figures',
                value: 'other_al-qaeda_links',
                subcategories: [
                    { name: 'Abu Zubaida', value: 'abu_zubaida' },
                    { name: 'Anwar Al-Awlaki', value: 'anwar_al-awlaki' },
                    { name: 'Ayman Al-Zawahiri', value: 'ayman_al-zawahiri' },
                    { name: 'Hambali', value: 'hambali' },
                    { name: 'Khalid Shaikh Mohammed', value: 'khalid_shaikh_mohammed' },
                    { name: 'Mohammed Haydar Zammar', value: 'mohammed_haydar_zammar' },
                    { name: 'Mohammed Jamal Khalifa', value: 'mohammed_jamal_khalifa' },
                    { name: 'Osama Bin Laden', value: 'osama_bin_laden' },
                    { name: 'Ramzi Bin Al-Shibh', value: 'ramzi_bin_al-shibh' },
                    { name: 'Ramzi Yousef', value: 'ramzi_yousef' },
                    { name: 'Sheikh Omar Abdul-Rahman', value: 'sheikh_omar_abdul-rahman' },
                    { name: 'Victor Bout', value: 'victor_bout' },
                    { name: 'Wadih El-Hage', value: 'wadih_el-hage' },
                    { name: 'Zacarias Moussaoui', value: 'zacarias_moussaoui' },
                ]

            },
            { name: 'Al-Qaeda by Region',
                value: 'al-qaeda_by_region',
                subcategories: [
                    { name: '"Lackawanna Six"', value: 'lackawanna_six' },
                    { name: 'Al-Qaeda in Balkans', value: 'al-qaeda_in_balkans' },
                    { name: 'Al-Qaeda in Germany', value: 'al-qaeda_in_germany' },
                    { name: 'Al-Qaeda in Italy', value: 'al-qaeda_in_italy' },
                    { name: 'Al-Qaeda in Southeast Asia', value: 'al-qaeda_in_southeast_asia' },
                    { name: 'Al-Qaeda in Spain', value: 'al-qaeda_in_spain' },
                    { name: 'Islamist Militancy in Chechnya', value: 'islamist_militancy_in_chechnya' },
                ]

            },
            { name: 'Specific Alleged Al-Qaeda Linked Attacks or Plots',
                value: 'specific_al-qaeda_plots',
                subcategories: [
                    { name: '1993 WTC Bombing', value: '1993_wtc_bombing' },
                    { name: '1993 Somalia Fighting', value: '1993_somalia_fighting' },
                    { name: '1995 Bojinka Plot', value: '1995_bojinka_plot' },
                    { name: '1998 US Embassy Bombings', value: '1998_us_embassy_bombings' },
                    { name: 'Millennium Bomb Plots', value: 'millennium_bomb_plots' },
                    { name: '2000 USS Cole Bombing', value: '2000_uss_cole_bombing' },
                    { name: '2001 Attempted Shoe Bombing', value: '2001_attempted_shoe_bombing' },
                    { name: '2002 Bali Bombings', value: '2002_bali_bombings' },
                    { name: '2004 Madrid Train Bombings', value: '2004_madrid_train_bombings' },
                    { name: '2005 7/7 London Bombings', value: '2005_7/7_london_bombings' },
                ]

            },
            { name: 'Miscellaneous Al-Qaeda Issues',
                value: 'misc_al-qaeda',
                subcategories: [
                    { name: 'Alleged Al-Qaeda Linked Attacks', value: 'alleged_al-qaeda_attacks' },
                    { name: 'Alleged Al-Qaeda Media Statements', value: 'alleged_al-qaeda_media_statements' },
                    { name: 'Key Captures and Deaths', value: 'key_captures_and_deaths' },
                ]

            },
            { name: 'Geopolitics and Islamic Militancy',
                value: 'geopolitics_and_islamic_militancy',
                subcategories: [
                    { name: 'US Dominance', value: 'us_dominance' },
                    { name: 'Alleged Iraq-Al-Qaeda Links', value: 'alleged_iraq-al-qaeda_links' },
                    { name: 'Iraq War Impact on Counterterrorism', value: 'iraq_war_impact_on_counterterrorism' },
                    { name: 'Israel', value: 'israel' },
                    { name: 'Pakistan and the ISI', value: 'pakistan_and_the_isi' },
                    { name: 'Saudi Arabia', value: 'saudi_arabia' },
                    { name: 'Terrorism Financing', value: 'terrorism_financing' },
                    { name: 'Londonistan - UK Counterterrorism', value: 'londonistan-uk_counterterrorism' },
                    { name: 'US Intel Links to Islamic Militancy', value: 'us_intel_links_to_islamic_militancy' },
                    { name: 'Algerian Militant Collusion', value: 'algerian_militant_collusion' },
                    { name: 'Indonesian Militant Collusion', value: 'indonesian_militant_collusion' },
                    { name: 'Philippine Militant Collusion', value: 'philippine_militant_collusion' },
                    { name: 'Yemeni Militant Collusion', value: 'yemeni_militant_collusion' },
                    { name: 'Other Government-Militant Collusion', value: 'other_government-militant_collusion' },

                ]

            },
            { name: 'Pakistan / ISI: Specific Cases',
                value: 'pakistan/isi',
                subcategories: [
                    { name: 'Pakistani Nukes & Islamic Militancy', value: 'pakistani_nukes_and_islamic_militancy' },
                    { name: 'Pakistani ISI Links to 9/11', value: 'pakistani_isi_links_to_9/11' },
                    { name: 'Saeed Sheikh', value: 'saeed_sheikh' },
                    { name: 'Mahmood Ahmed', value: 'mahmood_ahmed' },
                    { name: 'Haven in Pakistan Tribal Region', value: 'haven_in_pakistan_tribal_region' },
                    { name: '2008 Kabul Indian Embassy Bombing', value: '2008_kabul_indian_embassy_bombing' },
                    { name: 'Hunt for Bin Laden in Pakistan', value: 'hunt_for_bin_laden_in_pakistan' },
                ]

            },
            { name: 'Terrorism Financing: Specific Cases',
                value: 'terrorism_financing',
                subcategories: [
                    { name: 'Al Taqwa Bank', value: 'al_taqwa_bank' },
                    { name: 'Al-Kifah/MAK', value: 'al-kifah/mak' },
                    { name: 'BCCI', value: 'bcci' },
                    { name: 'BIF', value: 'bif' },
                    { name: 'BMI and Ptech', value: 'bmi_and_ptech' },
                    { name: 'Bin Laden Family', value: 'bin_laden_family' },
                    { name: 'Drugs', value: 'drugs' },

                ]

            },
            { name: "'War on Terrorism' Outside Iraq",
                value: 'war_on_terrorism_outside_iraq',
                subcategories: [
                    { name: 'Afghanistan', value: 'afghanistan' },
                    { name: 'Drone Use in Pakistan / Afghanistan', value: 'drone_use_in_pakistan/afghanistan' },
                    { name: 'Destruction of CIA Tapes', value: 'destruction_of_cia_tapes' },
                    { name: 'Escape From Afghanistan', value: 'escape_from_afghanistan' },
                    { name: 'High Value Detainees', value: 'high_value_detainees' },
                    { name: 'Terror Alerts', value: 'terror_alerts' },
                    { name: 'Counterterrorism Action After 9/11', value: 'counterterrorism_action_after_9/11' },
                    { name: 'Counterterrorism Policy/Politics', value: 'counterterrorism_policy/politics' },
                    { name: 'Internal US Security After 9/11', value: 'internal_us_security_after_9/11' },
                ]

            }
        ]
    },
    "US Electoral Politics": {},
    "US Civil Liberties": {},
    "US Health Care System": {},
    "US Domestic Terrorism": {},
    "Climate Change and Global Warming": {},
    "Football Business and Politics": {},
    "War in Afghanistan": {},
    "Iraq Under US Occupation": {},
    "Events Leading Up to the 2003 Invasion of Iraq": {},
    "Prisoner Abuse in Iraq, Afghanistan, and Elsewhere": {},
    "Domestic Propaganda and the News Media": {},
    "US International Relations": {},
    "Neoconservative Influences on US Policies": {},
    "US Confrontation with Iran": {},
    "2001 Anthrax Attacks": {},
    "Iran-Contra and Arms-for-Hostages Scandals": {},
    "Alleged Use of False Flag Attacks by Intelligence Agencies": {},
    "Nixon, Ford, and Watergate": {},
    "Genetic Engineering and the Privatization of Seeds": {},
    "The Struggle for Kosovar Albanian Self-Determination": {},
    "US Environmental Issues": {},
    "Environmental Impact of the 9/11 Attacks": {},
    "Neoliberalism and Globalization": {},
    "Hurricane Katrina": {},
    "Water Privatization": {},
    "History of US Interventions": {},
    "A. Q. Khan's Nuclear Network": {},
    "2004 Ousting of Jean-Bertrand Aristide": {},
    "US Military": {},
    "Bush administration's treatment of US troops": {}
}