export const environment = {
    authorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id: 'client',
    redirect_uri: 'http://127.0.0.1:4200/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    /* code_challenge: '4o_6zzQJIONveMbTyfTlUA4bUhVO5CY-jFVe_zPyIsE',
    code_verifier: 'HzAIFM84jk1qB2F22kJJPPoyfRN2hBgEHin5rqO2l9C', */
    token_url: 'http://localhost:9000/oauth2/token',
    grant_type: 'authorization_code',
    resource_url: 'http://localhost:8080/resource/',
    logout_url: 'http://localhost:9000/logout',
    secret_pkce: 'secret'
};