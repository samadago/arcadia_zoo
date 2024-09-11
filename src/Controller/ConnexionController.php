<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ConnexionController extends AbstractController
{
    #[Route('/connexion', name: 'app_connexion')]
    public function login(): Response
    {
        return $this->render('connexion/index.html.twig', [
            'controller_name' => 'ConnexionController',
        ]);
    }
}
