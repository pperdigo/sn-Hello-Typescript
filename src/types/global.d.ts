export interface QDimension {
  qDef: {
    qFieldDefs: string[];
  };
}

export interface QMeasure {
  qDef: {
    qDef: string;
  };
}

export interface QHyperCube {
  qDimensions: QDimension[];
  qMeasures: QMeasure[];
}

export interface Supernova {
  qae: {
    properties: {
      qHyperCubeDef?: QHyperCube;
      showTitles?: boolean;
      title?: string;
      subtitle?: string;
      footnote?: string;
    };
    data: {
      targets: any[];
    };
  };
  ext: {
    support: {
      snapshot?: boolean;
      export?: boolean;
      sharing?: boolean;
      exportData?: boolean;
      viewData?: boolean;
    };
  };
  component: () => void;
}
