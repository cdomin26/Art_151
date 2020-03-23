#include <stdio.h>

#define TRUE 1
#define FALSE 0

typedef struct OCEAN{
  int divers;
  int boat;
  int fish;
  int shark;
  int coralReef;
   
}Ocean;

void intro(){
  printf("The ocean surrounds the divers on a beautiful day.\n There are a couple clouds in the sky.\n");
}

void YEET(Ocean thisOcean){
  if(thisOcean.shark){
    printf("Panicked, the diver decides to swim away as fast as they can.\n");
  }
}

int main(){
  Ocean thisOcean;
  thisOcean.divers = 4;
  thisOcean.boat = 1;
  thisOcean.fish = 100; 
  thisOcean.shark = FALSE;
  thisOcean.coralReef = 1;

  intro();

  printf("The divers put on their gear inside the boat and get into the water.\n");
  printf("In the ocean they encounter many fish and a coral reef.\n");
  printf("A shark looms nearby. It is spotted by one of the divers.\n");
  
  thisOcean.shark = TRUE; 
  YEET(thisOcean);

  printf("Without much effort, the shark catches up to the diver. However, it does not harm them.\n"); 
  printf("They become friends!\n");

  return 0;
}
