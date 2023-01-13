function towerofHanoi(n, fromRod, toRod, usingRod) {
    if (n == 1){
        console.log(`Take disk 1 from rod ${fromRod} to ${toRod}`)
        return
    }
  towerofHanoi(n-1, fromRod, usingRod, toRod)
  console.log(`Take disk ${n} from rod ${fromRod} to ${toRod}`)
  towerofHanoi(n-1, usingRod, toRod, fromRod)
}

towerofHanoi(3, `A`, `C`, `B`)