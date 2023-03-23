

export default{
    
    data:{
        url: 'https://vault-staging-api.ntls.io/',
        schemaList: []
    },

    methods: {
        
        uploadDataSchema(schemaName, schema){
            // POST request to upload Data Schema
            this.axios.post(
                this.url + '/dataschema/create',
                {
                name: schemaName,
                data_schema: schema,
                created: new Date()
            },
            {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(response => { 
                return response;
              })
              .catch((error) => {
                console.log(error);
              })
        },

        getDataSchemas(){
            // GET request to obtain Data Schemas
            this.axios.get(this.url + '/dataschemas')
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error);
            });
        },

        uploadDataPool(walletAddress, dataPoolName, dataPoolDescription, dataFile, numOfRows){
            // POST request to upload Datapool
            this.axios.post(
                this.url + '/datapool/create',
                {creator_wallet_id: walletAddress,
                name: dataPoolName,
                description: dataPoolDescription,
                datapool_hash: "string",
                smart_contract_id: "string",
                smart_contract_address: "string",
                sealed_data: dataFile,
                total_rows: numOfRows,
                created: new Date()
                },
                {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                return response;
            }).catch(error => {
                console.log(error)});
        },

        getDataPools(walletId){
            // GET request to obtain Data pools
            this.axios.get(this.url + '/datapools?wallet_id=' + walletId)
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}