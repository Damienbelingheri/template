<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\File;
use App\Service\FileManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

final class AppController extends AbstractController
{
    // #[Route('/file/{fileId}', name: 'file', requirements : ['fileId' => '[0-9A-Za-z\-]+'])]
    // public function actionFile(EntityManagerInterface $em, FileManager $fileManager, string $fileId): Response
    // {
    //     $file = $em->getRepository(File::class)->find($fileId);
    //     if (!$file) {
    //         throw $this->createNotFoundException('Fichier non trouvé');
    //     }

    //     $filePath = $fileManager->resolvePath($file);

    //     return $this->file($filePath, null, ResponseHeaderBag::DISPOSITION_INLINE);
    // }

    #[Route('/{page}', name: 'app', requirements : ['page' => '.+'])]
    public function app(?string $page = null): Response
    {
        return $this->render('app/index.html.twig', ['type' => 'front']);
    }
}
