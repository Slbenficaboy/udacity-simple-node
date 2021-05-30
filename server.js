function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteTeam = process.env.FAVORITE_TEAM;
  while(true) {
    console.log(`My favorite team is ${favoriteTeam}`);
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
