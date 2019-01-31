export const jblew_account_history_request_matcher = (delegator: string) => (body: any) =>
    body.params[0] === "database_api" &&
    body.params[1] === "get_account_history" &&
    body.params[2][0] === delegator;
export const jblew_account_history_response = { "id": 0, "jsonrpc": "2.0", "result": [[619, { "block": 29510061, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"aaa\",\"rulesets\":[[\"Smart ruleset for Aaa\",[{\"rule\":\"expiration_date\",\"date\":\"2019-01-16T16:10:52.351Z\"}]]]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-16T16:06:15", "trx_id": "948ca4abfb52f9551dca67f10437d1b5639fe39a", "trx_in_block": 23, "virtual_op": 0 }], [620, { "block": 29510064, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"aaa\",\"rulesets\":[]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-16T16:06:24", "trx_id": "4c8e672b33ede2764e9e9048cefd1e80d9c33f8c", "trx_in_block": 0, "virtual_op": 0 }], [621, { "block": 29510066, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"aaa\",\"rulesets\":[]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-16T16:06:30", "trx_id": "4da37ddf86d972a71d1f776d0f51597ee785b02b", "trx_in_block": 38, "virtual_op": 0 }], [622, { "block": 29510158, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"guest123\",\"rulesets\":[[\"Grand ruleset for Guest123\",[{\"rule\":\"expiration_date\",\"date\":\"2019-01-16T16:12:09.377Z\"}]]]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-16T16:11:06", "trx_id": "4b5379dc9062c8f7dad9b8e4d553fc54dd5e77d4", "trx_in_block": 14, "virtual_op": 0 }], [623, { "block": 29510167, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"guest123\",\"rulesets\":[]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-16T16:11:33", "trx_id": "75d078100cf08f626651a548e24e886d2db39a5a", "trx_in_block": 14, "virtual_op": 0 }], [624, { "block": 29653440, "op": ["custom_json", { "id": "wise", "json": "[\"v2:confirm_vote\",{\"voter\":\"steemprojects2\",\"tx_id\":\"b1def7a4a6ead5546176383fe32a0a296399ca8f\",\"accepted\":true,\"msg\":\"\"}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-21T15:40:39", "trx_id": "567ae55ee5cfeb56d373d3a16be552524cc5aac5", "trx_in_block": 4, "virtual_op": 0 }], [625, { "block": 29653440, "op": ["vote", { "author": "hatu", "permlink": "john-mcafee-supports-anonymous-trading-platform", "voter": "jblew", "weight": 5000 }], "op_in_trx": 0, "timestamp": "2019-01-21T15:40:39", "trx_id": "567ae55ee5cfeb56d373d3a16be552524cc5aac5", "trx_in_block": 4, "virtual_op": 0 }], [626, { "block": 29847284, "op": ["transfer", { "amount": "0.001 STEEM", "from": "steemdetective", "memo": "Hy @jblew check out https://steemdetective.com", "to": "jblew" }], "op_in_trx": 0, "timestamp": "2019-01-28T09:24:48", "trx_id": "615828891ad0ff4799196be38350293180835f50", "trx_in_block": 28, "virtual_op": 0 }], [627, { "block": 29944179, "op": ["custom_json", { "id": "wise", "json": "[\"v2:set_rules\",{\"voter\":\"steemprojects2\",\"rulesets\":[[\"test-ruleset\",[]],[\"Hilarious ruleset for Steemprojects2\",[]],[\"Non trivial ruleset for Steemprojects2\",[{\"rule\":\"age_of_post\",\"mode\":\"younger_than\",\"unit\":\"day\",\"value\":7},{\"rule\":\"voting_power\",\"mode\":\"more_than\",\"value\":800},{\"rule\":\"tags\",\"mode\":\"any\",\"tags\":[\"bitcoin\"]}]]]}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-31T18:13:06", "trx_id": "414e70da9f15d176672b2f4ba4086d41699ee971", "trx_in_block": 19, "virtual_op": 0 }], [628, { "block": 29944244, "op": ["custom_json", { "id": "wise", "json": "[\"v2:confirm_vote\",{\"voter\":\"steemprojects2\",\"tx_id\":\"a81f7a308f6ac68554a7c7301ca58f9514d8811b\",\"accepted\":true,\"msg\":\"\"}]", "required_auths": [], "required_posting_auths": ["jblew"] }], "op_in_trx": 0, "timestamp": "2019-01-31T18:16:21", "trx_id": "32304de10be9c0746dea51e441a205bba9965d65", "trx_in_block": 5, "virtual_op": 0 }], [629, { "block": 29944244, "op": ["vote", { "author": "engrave", "permlink": "engrave-first-complete-blogging-platform-built-on-top-of-steem-network", "voter": "jblew", "weight": 10000 }], "op_in_trx": 0, "timestamp": "2019-01-31T18:16:21", "trx_id": "32304de10be9c0746dea51e441a205bba9965d65", "trx_in_block": 5, "virtual_op": 0 }]] };

export const dgop_matcher = () => (body: any) => body.params[0] === "database_api" && body.params[1] === "get_dynamic_global_properties";
export const dgop_response = {"id":0,"jsonrpc":"2.0","result":{"confidential_sbd_supply":"0.000 SBD","confidential_supply":"0.000 STEEM","current_aslot":30043307,"current_sbd_supply":"10437822.548 SBD","current_supply":"297512539.153 STEEM","current_witness":"aggroed","delegation_return_period":432000,"head_block_id":"01c8f23641a2f1f903789ce7b90d04e43e96d323","head_block_number":29946422,"last_irreversible_block_num":29946405,"maximum_block_size":65536,"num_pow_witnesses":172,"participation_count":128,"pending_rewarded_vesting_shares":"563212595.799793 VESTS","pending_rewarded_vesting_steem":"277292.559 STEEM","recent_slots_filled":"340282366920938463463374607431768211455","reverse_auction_seconds":900,"sbd_interest_rate":0,"sbd_print_rate":100,"sbd_start_percent":900,"sbd_stop_percent":1000,"time":"2019-01-31T20:05:21","total_pow":514415,"total_reward_fund_steem":"0.000 STEEM","total_reward_shares2":"0","total_vesting_fund_steem":"202087280.888 STEEM","total_vesting_shares":"405501892424.085150 VESTS","virtual_supply":"330568202.577 STEEM","vote_power_reserve_rate":10}};

export const getblock_1_matcher = () => (body: any) => body.id === 1 && body.params[0] === "database_api" && body.params[1] === "get_block" && body.params[2][0] === 29946405;
export const getblock_1_response = {"id":1,"jsonrpc":"2.0","result":{"block_id":"01c8f2256bccaeb1a474e74aefd03d2cf32f915b","extensions":[],"previous":"01c8f224cfb43d44205d8fa2f3caec8fa067017e","signing_key":"STM7Q2XQKWFRYhBrXTqT4hzWoY2RSe2DXc5aknqSsKsvw5KvCzags","timestamp":"2019-01-31T20:04:30","transaction_ids":["4a3674a9efe41d8d28586d7f84e379bede74bf54","e3d7a9dc0e4eef742b384cf8d66d8450c141c7cd","c9379746ff578b5a5b7445b1fab8c124cac0e277","30a463bb50b913cc15d043ca788017ddb0123403","3b2b46f279f5c9adad529cc6f1a2d862b42b37da","a39f8704208d54c55722246fc9bc0ce6d125ab20","eec09b4855de9b0a9436857974e4e47ae0aa301a","aae9160d24fdf0621bc615815a394f0dd9088b43","1106c2f4a988094e7bc9035b105a4778fe8a54ed","9b141db29dcf4e3903c855b51bf44d667a5e1656","5e34b87e8c402b9ef324a53ee31893a189606603","fe817e41c086f7ef649bcbbf87a5827f5ce7c0d4","c5a9a7bcb80b6f27f0a02e4b072c8010ba0b3821","c66fe432f1d56bc85e82d6bd37e7396418d25b9a","b5549d41a2552dc1e6f767791da22a4f603f55c8","c58ab0a6d2b0d1cab88123ddd431393a25f09708","781b073905683ec99580343b8c7f5b7add558e13","d827f43899ebc434259f54d4905ed06d69731a17","303e4c09ddd7d6f136140c9074b5429021d828da","41305e7eb0e62090e4a533782835bcaa726c9bcc","2294e59c165b850248718d2a8eeac9227ecb8f89","12f1e2638fef4829325f0b32964cc384d6683bd0","cb6fc5a51c84752303ebff542027593459e45052","9aa8d9650f6ef711027f03b484d2841a51b30264","e692a45215375cf396fdffd6f25ebd91bda46926","f78a9a4f0148d643d3e16fd9558b7883444382ee","56442b440763915a0a7478ce176d3aeee7b31b43","9b71749a2dc930922c19477ae3171289daac2367","15571ae847507d363c35f23870fc456c201f8d4d","9a5dca9ae9bec55d833931c2ac0f79eff4149e15","8bb85f5898be40bb4e4affcc219ed6fcdfb04e63","e07b5f883d447684006a676c4bb5a081033cd8a3","7dfa7badb5ba7a64babe4c48b434a154c1d813c1","67a7fac562dfa4ec05fad1c68b01e461ba3692b8","73f491145171b4356cfabf9cc115fd710f6d1ba9","7ee8b7ecb0f3fcb13e94503ec4ed4529d04541ce","dc70e994e50eb4ed2439055c73053e2e9d97b6bb"],"transaction_merkle_root":"3bd5aec0510db46609452cedf9bb5f42c2ff11f7","transactions":[{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["custom_json",{"id":"sm_find_match","json":"{\"match_type\":\"Ranked\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["jcrodriguez"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f691061aa9d9b1bf73794bbd3b0b2651cfd781c02366c5df4149e9f5679f21a8e552d44b7d5ce928dc1e1ea592ba0137d7c7a13fdf5b157d66df6573d2aa60b24"],"transaction_id":"4a3674a9efe41d8d28586d7f84e379bede74bf54","transaction_num":0},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["custom_json",{"id":"sm_submit_team","json":"{\"trx_id\":\"9c2645f5fd6e1dfa132ae10145476832ebc1e2b3\",\"team_hash\":\"2aa61f8383536df8e8f427e76b51ab41\",\"summoner\":\"C3-88-35G0PWS6DC\",\"monsters\":[\"C-8458D2W7GG\",\"C1-48-NYLE4KHCK0\",\"C-A57HBK2A00\",\"C1-62-1QZJ6I8HU8\",\"C1-64-CPCHB3FFGG\"],\"secret\":\"cgXe5gQK9Z\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["feuerbolt"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f2300e6d4faa78ab84aecf34f9c3930f251c26574750e9540d4fc626454c3f5927131b459c3926e11ec081546456a13c87a7b94a52dbb0a8b4bbd28309678d7d5"],"transaction_id":"e3d7a9dc0e4eef742b384cf8d66d8450c141c7cd","transaction_num":1},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["comment",{"author":"johnjgeddes","body":"<br><br><center>![the-5-best-collagen-supplements-you-can-trust.jpg](https://cdn.steemitimages.com/DQmYK9DGUdDcgoiwfaac3b7ZhMuayHTTVbmxzJmL4UCcgy6/the-5-best-collagen-supplements-you-can-trust.jpg)</center>\n\n\n\n<br><br> I'm doing what every middle aged man knows not to do—I'm putting myself out there—gambling on beating the odds with a younger woman.\n\nOf course, I'm bound to fail, but I miss the thrill, and frankly, what the hell...at least that's what I'm telling my wise self, while my foolish heart is siding with the girl.\n\nExceptions happen to every rule. In deference to the second law of thermodynamics, sometimes rust just stops.\n\n*But is it possible time backs up*? These kinds of questions gave Einstein heartburn. As for me,  they fan my foolish dreams and breathe on the embers of burnt-out desire.\n\n\n\n<br><br> We ride the elevator to the 18th floor of the Park Hotel and get a table with a view overlooking Yorkville and the University grounds.\n\nIt’s past six, and the sky is filled with towering cumulus clouds that promise a beautiful sunset.\n\n“Nice ambiance,” she says contentedly, scanning the candle lit tables and the view. “Good job, Lev.”\n\n<br><br> She pronounces my name with a short ‘e’, making it sound like sped or dead.\n\n“By the way,” I inform her, “my name is pronounced like ‘Leev’—short for Levi.”\n\n“Oh, really—you Jewish?”\n\n“Not exactly—I’m an ex-priest actually.”\n\n<br><br> She looks at me critically. “I’d never have figured you for that.”\n\n“Why not?”\n\n“You’re kinda hot—I don’t imagine that would go over well in that line of work.”\n\n“You think?” I laugh. I’m grinning from ear to ear.\n\n“Yeah, I think that’s why you had to Leeeev.” She stretches out the ‘e’ and smirks. Her eyes are dancing.\n\n<br><br> I take a sip of my scotch and sigh. “Yeah, you’re probably right,” I grin wistfully, while scenes of my past flash before me.\n\n“Don’t worry, Lev, your secret’s safe with me—unless, you piss me off. Then, it’ll be all over the six o’clock news.”\n\n“What—no pins stuck in my effigy?”\n\n“No,” she whispers, “ I could hate you but I could never hurt you.”\n\n<br><br> She stares at me with those golden eyes and my stomach flips and my mouth goes dry.\n\nAn hour later we’re sitting in Hemingway’s enjoying a strip loin sirloin and drinking wine.\n\nI don’t make it home for eight that night. By the time I roll in just after twelve, Samantha, my longhair calico is pouting, perched on the sofa back, staring at the city lights milky in the curtains.\n\n<br><br> “Sorry, Sam—was out with a friend. I’ll open a fresh can of tuna.”\n\nShe’s having none of it. Females don’t like to share their men.\n\nAnd as soon as I think it, I’m back in Clare’s apartment again—her eyes flashing, the angry questions—the helpless feeling of life slipping from me once more.\n\n<br><br> It’s easier to bury yourself in the bottomless amber of rye than to think on things that make you hurt—and don’t make it better afterwards.\n\nI open my laptop and a memo pops up. I realize it’s an anniversary of sorts—one year to the day since Clare and I parted.\n\nI pour two fingers of Canadian Club and toast her silver-framed portrait on the curio shelf. Each weekend I mean to take it down, but end up dusting it and putting it back with the rest of my past.\n\nIt may be time to move on. And maybe I already have.\n\n\n\n<br><br><center>© 2019, John J Geddes. All rights reserved</center>\n\n<br><br><center>[Photo](https://www.organicauthority.com/energetic-health/your-complete-guide-to-the-best-collagen-supplements  )  </center>\n\n<br><br>","json_metadata":"{\"tags\":[\"writing\",\"story\",\"life\",\"fiction\",\"love\"],\"image\":[\"https://cdn.steemitimages.com/DQmYK9DGUdDcgoiwfaac3b7ZhMuayHTTVbmxzJmL4UCcgy6/the-5-best-collagen-supplements-you-can-trust.jpg\"],\"links\":[\"https://www.organicauthority.com/energetic-health/your-complete-guide-to-the-best-collagen-supplements\"],\"app\":\"steemit/0.1\",\"format\":\"markdown\"}","parent_author":"","parent_permlink":"writing","permlink":"a-breath-of-spring-part-2-the-moon-s-only-there-when-we-see-it","title":"A Breath of Spring       Part 2            ...The Moon's Only There When We See It"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["203f2518e7821d88e1695b4b22fb478a3a9f8af8b15b8ec7cb6dd0f5e385f0cfe653679950cfdfc8940f766ef9f9ac5cdb7b87a6adb495bac94ba8b8ad100f06d5"],"transaction_id":"c9379746ff578b5a5b7445b1fab8c124cac0e277","transaction_num":2},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["comment",{"author":"joelai","body":"Thank you for your great support!!","json_metadata":"{\"tags\":[\"qurator\"],\"app\":\"steemit/0.1\"}","parent_author":"esteemapp","parent_permlink":"re-2019131t2124891z","permlink":"re-esteemapp-re-2019131t2124891z-20190131t200426320z","title":""}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["201d496ca3bc9f73b18254e11ca1d7034128a69bac70d4f88e57142d05a52ee3372609320d683e2dcb62b1c10cb9b30b197321c0e62a96c8a8281df515e36929ae"],"transaction_id":"30a463bb50b913cc15d043ca788017ddb0123403","transaction_num":3},{"block_num":29946405,"expiration":"2019-01-31T20:05:34","extensions":[],"operations":[["custom_json",{"id":"sm_find_match","json":"{\"match_type\":\"Ranked\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["eithne"]}]],"ref_block_num":61987,"ref_block_prefix":1816050652,"signatures":["205df5e0adc32c303dc8d8bcba4d514451967c8afceb9773b262d95471089f98846f96bddb1f1d476697e142e66307c13a3f9def66eaa146de8050ec789d7aaa61"],"transaction_id":"3b2b46f279f5c9adad529cc6f1a2d862b42b37da","transaction_num":4},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["custom_json",{"id":"sm_submit_team","json":"{\"trx_id\":\"a04ff8e0e0db24712ea687a14b75be0e2b3ce41b\",\"team_hash\":\"11e130ac9867da1f2ba63840d2d7c2b0\",\"summoner\":\"C1-49-JE7C1VI5YO\",\"monsters\":[\"C1-50-HXOXLVILRK\",\"C1-47-1DMT41FJZK\",\"C1-52-7NN3EAP5OW\",\"C1-66-2E8VOIU9GW\",\"C1-46-9C3KSFFBR4\",\"C1-51-LN1Y4B8N1S\"],\"secret\":\"nimUH6b82Q\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["willsaldeno"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["202496492da7f2d7e1d2263e236ceb6e5f1693d9e56238eac40825ba5c21ea74ab23721471bfbe0e2f90d3054640bd52d01e3979ecd215bc4cd6e963adb4afb255"],"transaction_id":"a39f8704208d54c55722246fc9bc0ce6d125ab20","transaction_num":5},{"block_num":29946405,"expiration":"2019-01-31T20:05:34","extensions":[],"operations":[["custom_json",{"id":"sm_submit_team","json":"{\"trx_id\":\"8826792c058b072cf73e92d6c62b29f8c1aa2f22\",\"team_hash\":\"3aec0204e2e90aa2f010adbc39a70f54\",\"summoner\":\"C1-38-A72HEJI3ZK\",\"monsters\":[\"C1-40-94FWYOS1XS\",\"C1-34-0J85USSJ4W\",\"C1-35-QT3LX8VRRK\",\"C1-63-CKC7HWNJ7K\",\"C1-39-CGWH7X375S\",\"C-CPFW9QXZAO\"],\"secret\":\"EvcgUpThld\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["eredin"]}]],"ref_block_num":61987,"ref_block_prefix":1816050652,"signatures":["200f5753eeaa95be146c5d67d7f2f9a6d8cae5f7b1693169955ad44fd821248f7d2851f7cc231820079ef31e0cf572cb1d778896d9b9358504a626f94a00233737"],"transaction_id":"eec09b4855de9b0a9436857974e4e47ae0aa301a","transaction_num":6},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["vote",{"author":"face2face","permlink":"why-and-how-you-should-use-esteem-surfer-in-your-pcs","voter":"jamal09","weight":10000}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206ce59bbee105461a7fc9860e39c1f5405537eac3e0201952af298485a0b3e69868145311caae12c1962ff0625f5ea7872137a923debbfae6f2d8ecea9ed8b119"],"transaction_id":"aae9160d24fdf0621bc615815a394f0dd9088b43","transaction_num":7},{"block_num":29946405,"expiration":"2019-01-31T20:05:26","extensions":[],"operations":[["vote",{"author":"dune69","permlink":"actifit-dune69-20190130t172448712z","voter":"johnlomanto25","weight":10000}]],"ref_block_num":61987,"ref_block_prefix":1816050652,"signatures":["1f1ac999d72088e3f41cdfc14e467a20b548526e26573b1d9470f4fd9b5772df89580c84a661244f1035c0901ea583d9ccb9bcf7c14b7e8e0368573b27ae5e0795"],"transaction_id":"1106c2f4a988094e7bc9035b105a4778fe8a54ed","transaction_num":8},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["transfer",{"amount":"0.001 SBD","from":"minnowbooster","memo":"Your delegation request for 3 weeks 2233.0 SP was processed.","to":"mobi72"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1c2a63ad978afe38771586b38815aaded896f7d8ff3425e1e8a6330a374b84d95248ff21ff641d9c306e6ac85c4a184b21b672a5bf33fea00367743ba1f7f4f861"],"transaction_id":"9b141db29dcf4e3903c855b51bf44d667a5e1656","transaction_num":9},{"block_num":29946405,"expiration":"2019-01-31T20:14:18","extensions":[],"operations":[["vote",{"author":"steemmonsters","permlink":"the-ninth-dragon-congress","voter":"niklaus22","weight":10000}]],"ref_block_num":61967,"ref_block_prefix":3513414263,"signatures":["2019a9112dc16e2803a749b230b12d0721b8ab12c9bc367ea653e6faf977a2261614a0c789d31e94f8b6ecf6f09ef42552cf5996a5bd65fa604efee373e8bbca00"],"transaction_id":"5e34b87e8c402b9ef324a53ee31893a189606603","transaction_num":10},{"block_num":29946405,"expiration":"2019-01-31T20:05:26","extensions":[],"operations":[["delegate_vesting_shares",{"delegatee":"rl098","delegator":"steem","vesting_shares":"30098.578710 VESTS"}],["delegate_vesting_shares",{"delegatee":"rlaguo","delegator":"steem","vesting_shares":"30098.578710 VESTS"}],["delegate_vesting_shares",{"delegatee":"rlamontagne28","delegator":"steem","vesting_shares":"30098.578710 VESTS"}],["delegate_vesting_shares",{"delegatee":"rlatkwkd33","delegator":"steem","vesting_shares":"30098.578710 VESTS"}]],"ref_block_num":61984,"ref_block_prefix":1816269356,"signatures":["1f5a6c7096253797a180c83d997f7e6f810d9674625e12ff7830624325f45c8cae23be4fb29a83168f280ca2ea61928b6640cfff8b42486345a9c1b0bb81467d44"],"transaction_id":"fe817e41c086f7ef649bcbbf87a5827f5ce7c0d4","transaction_num":11},{"block_num":29946405,"expiration":"2019-01-31T20:14:21","extensions":[],"operations":[["custom_json",{"id":"sm_submit_team","json":"{\"trx_id\":\"e2707b72718fa0ae35a33905fa1d588fcea4b49f\",\"team_hash\":\"5f455ecb4dac58049e86e0d1b6300f72\",\"summoner\":\"C1-38-5S9V8SXBYO\",\"monsters\":[\"C1-36-KHNAHLNDGW\",\"C1-34-8TAZKG41KW\",\"C1-35-H2G5NHKG0W\",\"C1-39-3CZH5XG7HS\",\"C1-62-16AZM6L01S\",\"C1-68-OJWGM6WUXC\"],\"secret\":\"YxgaLM2Mxx\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["clmstudios"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206a7cbc34817107f5fd48f42b5db6b41b18605655eff642915af10a42b2d8961f658e15227c5174c36e3838d53f0a20cced9e5c00f055297d6c8f924d141e33bf"],"transaction_id":"c5a9a7bcb80b6f27f0a02e4b072c8010ba0b3821","transaction_num":12},{"block_num":29946405,"expiration":"2019-01-31T20:14:24","extensions":[],"operations":[["transfer",{"amount":"64.767 STEEM","from":"ocdb","memo":"#4FMwfN8hAxz4SgWe4J8AKKx1egXcyd2EKwcpEcRgYyWV3rfdPiLQ95RmTrvPGYgHqvTueD2tkf1xYmxQ8PFmFhBeGZmegsgmHK6ewppe8pDVRf4SCyCDVBVMVsKX2aQ1dfHV1E6hAhURJTA6uhixiymouqiNVaRTHvekr6xzcXyZ9","to":"acidyo"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f3a1af3e957ab7f2bf98140fa01ce149a8180adc4492a2a47684ed62a06b8680b14dc1ca44eaa95004367db6172d360ec79696cc73a20677cc89ea84d1fd112dc"],"transaction_id":"c66fe432f1d56bc85e82d6bd37e7396418d25b9a","transaction_num":13},{"block_num":29946405,"expiration":"2019-01-31T20:14:24","extensions":[],"operations":[["custom_json",{"id":"sm_find_match","json":"{\"match_type\":\"Ranked\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["damper"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f28297d344869b19a31357157c7fc1884d7d8b2e43e4aea4aae25845f63d968af0fcf84dc26e9b68426703fa72c55a225c56cdc1c4587a8a6d887def717261469"],"transaction_id":"b5549d41a2552dc1e6f767791da22a4f603f55c8","transaction_num":14},{"block_num":29946405,"expiration":"2019-01-31T20:14:24","extensions":[],"operations":[["transfer",{"amount":"4.900 STEEM","from":"magicdice","memo":"You have won 4.900 STEEM. Dice Roll: 46. Your prediction: under 81. MAGIC token reward: 100.0. Multiplier: 1.23. WinChance: 80%. {\"betId\":\"5c5354ca2fa5710ff81c274d\",\"diceRoll\":46,\"refTransactionId\":\"16f7fab65a591814c0bc3232fdc8e7e9c84d50f4\",\"refBlockNumber\":29946403,\"serverSeedHash\":\"dad2d77b93a57091919bc21b9f62be4ae79a824ffde82f4cdf94ef6a25c40d10\",\"isValid\":true}","to":"kgakakillerg"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f16eb1432dcc21794f16e2d1b4c60514a3a7a0476218b52eadedd368821dcd815217e98812e450e67850ad1b478f142ebf05d8caf7693e0d8ee4e0dc10796df82"],"transaction_id":"c58ab0a6d2b0d1cab88123ddd431393a25f09708","transaction_num":15},{"block_num":29946405,"expiration":"2019-01-31T20:14:24","extensions":[],"operations":[["vote",{"author":"ifeoluwa88","permlink":"things-i-have-come-to-realise","voter":"arknight","weight":10000}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["20203c02736bda1f44f66367689af842a7587ff9c56b80898a6624898e09bea31c489c9f087a8d9495dc00222e6a2aef30e8a1f304c56ca5951dcc567732378682"],"transaction_id":"781b073905683ec99580343b8c7f5b7add558e13","transaction_num":16},{"block_num":29946405,"expiration":"2019-01-31T20:14:24","extensions":[],"operations":[["transfer",{"amount":"0.001 STEEM","from":"magicdice","memo":"You lost. Dice Roll: 57. Your prediction: under 10. MAGIC token reward: 5.0. Multiplier: 10.89. WinChance: 9%. {\"betId\":\"5c5354ca2fa5710ff81c274c\",\"diceRoll\":57,\"refTransactionId\":\"39b652b8658f15040197ed7c05a6e0d1533c6e2b\",\"refBlockNumber\":29946403,\"serverSeedHash\":\"dad2d77b93a57091919bc21b9f62be4ae79a824ffde82f4cdf94ef6a25c40d10\",\"isValid\":true}","to":"coffeedrinker51"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206685dcede70e683cf212cb8542652788b33f2c968430edcd3203e60bcf6ab3e760d693be8b7ffe64ff62dc486b55022bdb54dd94642924d9ec8d71f4857833a9"],"transaction_id":"d827f43899ebc434259f54d4905ed06d69731a17","transaction_num":17},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"ran.koree","permlink":"my-drawing-calciatore-panini-modify-and-change-colors","voter":"equipodelta","weight":10000}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["2023a9d96370d485f39716b122b56428181e82c19c8327dd127fbe44812a90242f32bfa16e26c658ae130275a9ef1c9b6bc4c89f4820ee0d61359c6d61e3c23bb5"],"transaction_id":"303e4c09ddd7d6f136140c9074b5429021d828da","transaction_num":18},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["custom_json",{"id":"sm_submit_team","json":"{\"trx_id\":\"3a6077aa5b7bbc948abbfae0eddee3e6a9ecc094\",\"team_hash\":\"870321c02c1639bfcc11dd775a126e33\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["steelman"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f282929857fb61731a4ce3637114a5c48af48ea97bbd985606393a2ae3bbd52a55a442078fed04473cb53437550a72b5315ecce1efa4697eed6bcd750a9ad4ec2"],"transaction_id":"41305e7eb0e62090e4a533782835bcaa726c9bcc","transaction_num":19},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["claim_reward_balance",{"account":"dan-atstarlite","reward_sbd":"0.000 SBD","reward_steem":"0.000 STEEM","reward_vests":"4213.988463 VESTS"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f2368095a614afc3dad94ed33a9848b3ab9c75a87ca52bb0baa7bab859edd4a2c20e7f672f065eb4d05c86ac9af5021e40eec877c464b4ba6d6a4a595b2e73a91"],"transaction_id":"2294e59c165b850248718d2a8eeac9227ecb8f89","transaction_num":20},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"takowi","permlink":"payday-okay-more-like-getting-money-back-after-35-days-of-waiting-1548465320717","voter":"sam.hsuu","weight":490}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f602b9737b25036df213487cc5b1237445fe2279f7d35c585f477302a6d9445992931c62436a5b3e382f2a3d9790c86bbbba948470307dce68e8fbae33401a174"],"transaction_id":"12f1e2638fef4829325f0b32964cc384d6683bd0","transaction_num":21},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"blueeyes8960","permlink":"calling-on-my-actifit-community","voter":"sneakyninja","weight":800}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["20714be10defa29b5c8975d4f943856d3a0cc3c4544fc6126a198eb14067a5ec831fdb9cf3143ace91848b4acbf5d80a73c1b2996694ed25ad745df86c07a6df82"],"transaction_id":"cb6fc5a51c84752303ebff542027593459e45052","transaction_num":22},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["custom_json",{"id":"sm_find_match","json":"{\"match_type\":\"Ranked\",\"app\":\"steemmonsters/0.4.4.2\"}","required_auths":[],"required_posting_auths":["akipponn"]}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206e872d059aa7254a62620a52889f774cfb133bdea74ab505be9edb92dcf7ee5662b4f3d632a3fd5628146fdb86f675a1cc93180baefa83e6fa66f675d225751f"],"transaction_id":"9aa8d9650f6ef711027f03b484d2841a51b30264","transaction_num":23},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["transfer",{"amount":"3.722 STEEM","from":"magicdice","memo":"You have won 3.722 STEEM. Dice Roll: 71. Your prediction: under 80. MAGIC token reward: 75.0. Multiplier: 1.24. WinChance: 79%. {\"betId\":\"5c5354cb2fa5710ff81c2752\",\"diceRoll\":71,\"refTransactionId\":\"d0fa1edd69898dc3bfabe181e633a66015bc0bcc\",\"refBlockNumber\":29946404,\"serverSeedHash\":\"dad2d77b93a57091919bc21b9f62be4ae79a824ffde82f4cdf94ef6a25c40d10\",\"isValid\":true}","to":"silver-hammer"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["203a8062761418b0b7e3855a7db6339fd7fc9c7ec0d02d4266d8b72c22c6f9cf6c7c6a265f23336d0d0730bc7328083ad82761878f79193d89e81cfcc403268471"],"transaction_id":"e692a45215375cf396fdffd6f25ebd91bda46926","transaction_num":24},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"takowi","permlink":"payday-okay-more-like-getting-money-back-after-35-days-of-waiting-1548465320717","voter":"nanastraybutt","weight":490}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["205369b285e170e195c42585d99ecf8e55de619862978f64ff6a5304141a34c6ca4daaf81f16fd72f4c81503dc4ad521c6c4f6c43c2e428066ad2ca38f8029c51c"],"transaction_id":"f78a9a4f0148d643d3e16fd9558b7883444382ee","transaction_num":25},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"blueeyes8960","permlink":"calling-on-my-actifit-community","voter":"josephsavage","weight":400}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["2033c0754c00fe1958838e8791b17cfad92803c0b1370a61ff8b577baed2fc9e9317aeeff3273033bf66557e8c33675bec534548c87bac409a1861e09952c45ee6"],"transaction_id":"56442b440763915a0a7478ce176d3aeee7b31b43","transaction_num":26},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"emcz31","permlink":"ojos-mentirosos-or-poesia-or","voter":"thescubageek","weight":120}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["20417b6c45e65b1cfb710573d9eb21ec005053b6254fee408aadabe711058909ee3a89e3e079008becc7831c310486bd36ba089426c494c6e04b2be5ef50367ac6"],"transaction_id":"9b71749a2dc930922c19477ae3171289daac2367","transaction_num":27},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"takowi","permlink":"payday-okay-more-like-getting-money-back-after-35-days-of-waiting-1548465320717","voter":"wanaf","weight":490}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206830b5197c95fac605f5fcbb6d7ee44f7bbb180bc9da50f19e75b3b2bd8ed87d626ba6d6949ce24ba0ae58a08e871fafbb78ba82aa937c0b719cea30d4d24e2c"],"transaction_id":"15571ae847507d363c35f23870fc456c201f8d4d","transaction_num":28},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"takowi","permlink":"payday-okay-more-like-getting-money-back-after-35-days-of-waiting-1548465320717","voter":"explorernations","weight":245}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f61711b54599be78b7f85f5e728e32531bc2affaaeccdee7dd55c30ad0c4994435b07e0ce931fa07815f75802347eddfafcb1929a469ab7d56ef08bd38d418a82"],"transaction_id":"9a5dca9ae9bec55d833931c2ac0f79eff4149e15","transaction_num":29},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["transfer",{"amount":"0.001 STEEM","from":"magicdice","memo":"You lost. Dice Roll: 12. Your prediction: over 95. MAGIC token reward: 20.0. Multiplier: 19.60. WinChance: 5%. {\"betId\":\"5c5354cb2fa5710ff81c2753\",\"diceRoll\":12,\"refTransactionId\":\"8a54f306f2c5edbc82171e142052d8b6e03ffa2e\",\"refBlockNumber\":29946404,\"serverSeedHash\":\"dad2d77b93a57091919bc21b9f62be4ae79a824ffde82f4cdf94ef6a25c40d10\",\"isValid\":true}","to":"steem.services"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["206b08bc11eb4c2ba9bddfac2fbd762c3a0c334901b7fe863f6bac07c0f72157886f48a029508ce9b6f1a0dac47ebf9903b26dbdd455a1119b853bc48a170e37b9"],"transaction_id":"8bb85f5898be40bb4e4affcc219ed6fcdfb04e63","transaction_num":30},{"block_num":29946405,"expiration":"2019-01-31T20:05:27","extensions":[],"operations":[["delegate_vesting_shares",{"delegatee":"rlehman26","delegator":"steem","vesting_shares":"30098.578710 VESTS"}],["delegate_vesting_shares",{"delegatee":"rlfederico","delegator":"steem","vesting_shares":"30098.578710 VESTS"}]],"ref_block_num":61985,"ref_block_prefix":490279606,"signatures":["1f2ee57526e11aa6263fcd2616e7639d34c6b5b9a0bd3af0276e03d48df7097dff2372da7cbfdf9fa4ba8a0b096a49242f8a194b61f8a469a84830630be9a6093c"],"transaction_id":"e07b5f883d447684006a676c4bb5a081033cd8a3","transaction_num":31},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"masoom","permlink":"actifit-masoom-20190131t172604705z","voter":"chwaqas","weight":10000}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["2021410ab6d74f4617691d7dffa88646e0656ebfb71eef335bde5ec18f3c15455313f121aeebffef530bda8f164426bb2c392ce4a9b862fae83f89d25a73e8b006"],"transaction_id":"7dfa7badb5ba7a64babe4c48b434a154c1d813c1","transaction_num":32},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["transfer",{"amount":"1.100 STEEM","from":"cesar.oat","memo":"rock vs janken","to":"janken"}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f6579ef967ed62b06a2c2f1bbae1b751f3e118710837db90e6ba7f0ac56c0925b700ed94787905231357f86b89a111183214f3ac70f7f53276cd72cfed526faee"],"transaction_id":"67a7fac562dfa4ec05fad1c68b01e461ba3692b8","transaction_num":33},{"block_num":29946405,"expiration":"2019-01-31T20:05:37","extensions":[],"operations":[["custom_json",{"id":"sm_team_reveal","json":"{\"trx_id\":\"20dd611c25dc06d971f5a002de7896296956f48d\",\"summoner\":\"C1-38-484A8IOYE8\",\"monsters\":[\"C1-40-MFGGER0AGW\",\"C1-34-FH9HDWDFW0\",\"C1-35-WQ00YWHZK0\",\"C1-39-03JECXX7CW\"],\"secret\":\"FrgznKCIxF\"}","required_auths":[],"required_posting_auths":["ermion"]}]],"ref_block_num":61988,"ref_block_prefix":1144894671,"signatures":["1f3f4d3b0d322332526ac76e2e0b29be8b351992dcb3c007d8549882696918b49222f2da5446e8c7f501a3cc3e5442d9f99ccdc39f029d7ddd233701a0b6fff6eb"],"transaction_id":"73f491145171b4356cfabf9cc115fd710f6d1ba9","transaction_num":34},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"sagescrub","permlink":"giveaway-12-copies-of-the-homesteader-s-handbook-raising-chickens-ebook","voter":"riverflows","weight":70}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f66f790bbbc39a8abeaafdf6072bb7b8dabff88f3ec936f782670e7acdafd647d639f405870300b9b09b9e1c3e8574ae8b66c4d3e8875140d4430f96856e60f26"],"transaction_id":"7ee8b7ecb0f3fcb13e94503ec4ed4529d04541ce","transaction_num":35},{"block_num":29946405,"expiration":"2019-01-31T20:14:27","extensions":[],"operations":[["vote",{"author":"steemauto","permlink":"steemauto-free-and-unlimited-automation-service-on-the-steem-blockchain-138","voter":"edprivat","weight":150}]],"ref_block_num":61969,"ref_block_prefix":67652145,"signatures":["1f7cf9c45b343a5a9bf681db07361bbfdb404cb8fb15373281423fab5bd296b51b40534c4dadfbed533bb4e533e05bf596f7351cd1ccecf557510e37e26a3a15d8"],"transaction_id":"dc70e994e50eb4ed2439055c73053e2e9d97b6bb","transaction_num":36}],"witness":"utopian-io","witness_signature":"1fa9419b52fbc05f2a9aebff3b9090ab686e29e01d66f2089f23ef12cdc1602d0140866728872b469e4e3609dac010b17e5d457e21e7a2530d048e1e7631aa91ef"}};

export const broadcast_response_missingRequiredAutority = {"error":{"code":-32000,"data":{"code":3030000,"message":"missing required posting authority","name":"tx_missing_posting_auth","stack":[{"context":{"file":"transaction_util.hpp","hostname":"","level":"error","line":58,"method":"verify_authority","timestamp":"2019-01-31T20:14:42"},"data":{"active":{"account_auths":[],"key_auths":[["STM8JUnxtmL2gvzE5x7mSahhXzbG3ATegSwhbHi7DQSs7qMXLc9mx",1]],"weight_threshold":1},"id":"steemprojects2","owner":{"account_auths":[],"key_auths":[["STM7Tiur9jY4afSADjcL388fDTpAnBsUe5V4rMMc3bzNu2s6pAReJ",1]],"weight_threshold":1},"posting":{"account_auths":[["engrave.app",1],["steemprojectsapp",1],["wisevote.app",1]],"key_auths":[["STM7Vq9BaihXGvCj51rm8oHVxQyh2cHjihfkd6jxZ2f6NG9MwJnHa",1]],"weight_threshold":1}},"format":"Missing Posting Authority ${id}"},{"context":{"file":"transaction_util.hpp","hostname":"","level":"warn","line":103,"method":"verify_authority","timestamp":"2019-01-31T20:14:42"},"data":{"auth_containers":[{"type":"custom_json_operation","value":{"id":"wise","json":"[\"v2:send_voteorder\",{\"delegator\":\"jblew\",\"ruleset\":\"test-ruleset\",\"author\":\"jblew\",\"permlink\":\"permlink-73156236-fdbd-4165-a9e7-bb789debf449\",\"weight\":3139}]","required_auths":[],"required_posting_auths":["steemprojects2"]}}],"sigs":["STM5CfH1xsBWY5Bj3f8wKF5rawrj4LGfwEV4MoKLFeFvdP3L5KEsF"]},"format":""},{"context":{"file":"transaction.cpp","hostname":"","level":"warn","line":232,"method":"verify_authority","timestamp":"2019-01-31T20:14:42"},"data":{"*this":{"expiration":"2019-01-31T20:15:21","extensions":[],"operations":[{"type":"custom_json_operation","value":{"id":"wise","json":"[\"v2:send_voteorder\",{\"delegator\":\"jblew\",\"ruleset\":\"test-ruleset\",\"author\":\"jblew\",\"permlink\":\"permlink-73156236-fdbd-4165-a9e7-bb789debf449\",\"weight\":3139}]","required_auths":[],"required_posting_auths":["steemprojects2"]}}],"ref_block_num":61988,"ref_block_prefix":1144894671,"signatures":["1f793ca85fc74c55d9f81d15582f853f76e5de15cceccf9af548b341100719caf15d31b87d088be407ea86495bccd3a3004a49024fed4df02bd78aca9196730bd7"]}},"format":""},{"context":{"file":"database.cpp","hostname":"","level":"warn","line":3491,"method":"_apply_transaction","timestamp":"2019-01-31T20:14:42"},"data":{"trx":{"expiration":"2019-01-31T20:15:21","extensions":[],"operations":[{"type":"custom_json_operation","value":{"id":"wise","json":"[\"v2:send_voteorder\",{\"delegator\":\"jblew\",\"ruleset\":\"test-ruleset\",\"author\":\"jblew\",\"permlink\":\"permlink-73156236-fdbd-4165-a9e7-bb789debf449\",\"weight\":3139}]","required_auths":[],"required_posting_auths":["steemprojects2"]}}],"ref_block_num":61988,"ref_block_prefix":1144894671,"signatures":["1f793ca85fc74c55d9f81d15582f853f76e5de15cceccf9af548b341100719caf15d31b87d088be407ea86495bccd3a3004a49024fed4df02bd78aca9196730bd7"]}},"format":""},{"context":{"file":"database.cpp","hostname":"","level":"warn","line":817,"method":"push_transaction","timestamp":"2019-01-31T20:14:42"},"data":{"trx":{"expiration":"2019-01-31T20:15:21","extensions":[],"operations":[{"type":"custom_json_operation","value":{"id":"wise","json":"[\"v2:send_voteorder\",{\"delegator\":\"jblew\",\"ruleset\":\"test-ruleset\",\"author\":\"jblew\",\"permlink\":\"permlink-73156236-fdbd-4165-a9e7-bb789debf449\",\"weight\":3139}]","required_auths":[],"required_posting_auths":["steemprojects2"]}}],"ref_block_num":61988,"ref_block_prefix":1144894671,"signatures":["1f793ca85fc74c55d9f81d15582f853f76e5de15cceccf9af548b341100719caf15d31b87d088be407ea86495bccd3a3004a49024fed4df02bd78aca9196730bd7"]}},"format":""}]},"message":"missing required posting authority:Missing Posting Authority steemprojects2"},"id":2,"jsonrpc":"2.0"};
