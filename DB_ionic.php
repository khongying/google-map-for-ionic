<?php 
    require '../connfnc.php';
    function mobile_somedata(){
        $postdata = file_get_contents("php://input");
            if (isset($postdata)) {
                $request = json_decode($postdata);
                $postData['Username'] = $request->username;
                $postData['Password'] = $request->password;
                echo json_encode($postData);
                exit();
            }
    }
    mobile_somedata();
?>