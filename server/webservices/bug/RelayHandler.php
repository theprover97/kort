<?php
namespace Kort\Webservice;

class RelayHandler
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function relayHandler($path)
    {
        $wsConfig = new DbWebserviceConfig();
        $fullPath = $wsConfig->url.$this->app->request()->getResourceUri();
        if (!empty($_SERVER['QUERY_STRING'])) {
            $fullPath .= "?".$_SERVER['QUERY_STRING'];
        }
        echo $this->relayRequest($this->app->request()->getMethod(), $fullPath);
    }

    public function relayRequest($method, $url, $data = false)
    {
        $curl = curl_init();

        switch ($method)
        {
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);

                if ($data) {
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                }
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data) {
                    $url = sprintf("%s?%s", $url, http_build_query($data));
                }
        }

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($curl);
    }
}
