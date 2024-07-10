<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'

    let WIF:string
    let address:string
    
    function createKeys ()
    {
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)
    }
</script>

<section>
    <div class= "p-5">
    <button class = "bg-blue-800 text-white text-center font-semibold p-4 rounded mx-auto mb-4" on:click={createKeys}> Generate New wallet Keys </button>
    <p>Private Key WIF format is: <span class = "font-semibold">{WIF}</span></p>
    <p>Your Bitcoin Address is: <span class = "font-semibold">{address}</span></p>
    </div>
</section>